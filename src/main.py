import os
import json
import numpy as np
from tensorflow import keras
from fastapi import FastAPI, UploadFile, File
from fastapi import FastAPI, Request, Response, Form, HTTPException
from twilio.twiml.messaging_response import MessagingResponse
from twilio.request_validator import RequestValidator
import argparse
import logging
from fastapi.middleware.cors import CORSMiddleware
from typing import Literal
from pydantic import BaseModel, Field
from getpass import getpass
import openai
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.llms import OpenAI
from langchain.utilities.wolfram_alpha import WolframAlphaAPIWrapper
from langchain.memory import ConversationBufferMemory
from langchain.chat_models import ChatOpenAI

# Load environment variables from .env file

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


app = FastAPI()

openai.api_key = os.environ['OPENAI_API_KEY'] 
os.environ["WOLFRAM_ALPHA_APPID"] 
os.environ["TWILIO_AUTH_TOKEN"] 

@app.get("/crop-info/{prediction_result}")
def get_crop_info(prediction_result: str):

    # Create the prompt strings
    about = f"Please tell me about {prediction_result} crop"
    caused = f"How is {prediction_result} crop diseased caused?"
    cure = f"What is the cure for {prediction_result} crop diseased?"

    # Use Langchain for the query engine
    llm = ChatOpenAI(temperature=0)

    # Define tools for the agent
    tools = load_tools(['wikipedia', 'wolfram-alpha'], llm=llm)

    # Set up conversation memory
    memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    # Initialize the agent
    agent = initialize_agent(tools, llm, agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,
                             verbose=True, memory=memory, max_iterations=6)

    # Get LLM response for crop information
    try:
        info = agent.run(input=about)
    except Exception as e:
        info = str(e)
        if info.startswith("Could not parse LLM output: `"):
            info = info.removeprefix("Could not parse LLM output: `").removesuffix("`")
        else:
            raise Exception(str(e))

    # Get LLM response for crop disease causes
    try:
        cause = agent.run(input=caused)
    except Exception as e:
        cause = str(e)
        if cause.startswith("Could not parse LLM output: `"):
            cause = info.removeprefix("Could not parse LLM output: `").removesuffix("`")
        else:
            raise Exception(str(e))

    # Get LLM response for crop disease cure
    try:
        precaution = agent.run(input=cure)
    except Exception as e:
        precaution = str(e)
        if precaution.startswith("Could not parse LLM output: `"):
            precaution = info.removeprefix("Could not parse LLM output: `").removesuffix("`")
        else:   
            raise Exception(str(e))

    response = {
        "crop_info": info,
        "crop_disease_causes": cause,
        "crop_disease_cure": precaution
    }

    return response

system_prompt = "You are a comic book assistant. You reply to the user's question strictly from the perspective of a comic book assistant. If the question is not related to comic books, you politely decline to answer."


class Conversation(BaseModel):
    role: Literal["assistant", "user"]
    content: str


class ConversationHistory(BaseModel):
    history: list[Conversation] = Field(
        example=[
            {
                "role": "assistant",
                "content": "Hello, I'm a Plant Disease Assistant. I can help you identify plant diseases. What plant are you looking at?",
            },
            {"role": "user", "content": "I'm looking at a tomato plant."},
        ]
    )


@app.get("/")
async def health_check():
    return {"status": "OK!"}


@app.post("/chat")
async def llm_response(history: ConversationHistory) -> dict:
    # Step 0: Receive the API payload as a dictionary
    history = history.dict()

    # Step 1: Initialize messages with a system prompt and conversation history
    messages = [{"role": "system", "content": system_prompt}, *history["history"]]

    # Step 2: Generate a response
    llm_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=messages
    )

    # Step 3: Return the generated response and the token usage
    return {
        "message": llm_response.choices[0]["message"],
        "token_usage": llm_response["usage"],
    }

def load_categories(file_path):
    with open(file_path) as file:
        data = json.load(file)

    # Swap keys and values
    data = dict([(value, key) for key, value in data.items()])

    return data


def load_model(model_path):
    model = keras.models.load_model(model_path)

    return model


def get_prediction_info(cats, class_id):
    name, disease = cats[class_id].split("___")
    name, disease = name.replace("_", " "), disease.replace("_", " ")

    return name, disease


def get_prediction(model, categories, img):
    # Preprocess image
    img = img.reshape((1, 224, 224, 3))
    img = img.astype("float32") / 255.0

    # Get prediction
    prediction = model.predict(img)
    class_id = prediction.argmax()

    return get_prediction_info(categories, class_id)


def handle_invalid_path(filepath):
    if not os.path.exists(filepath):
        raise argparse.ArgumentTypeError(f"{filepath} does not exist")

    return os.path.expanduser(filepath)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict_disease(image: str, run_inference: bool):
    # Save the uploaded files
    model_path = r"plant_disease_detection.h5"
    categories_path = r"categories.json"

    # Load categories
    categories = load_categories(categories_path)

    # Load model
    model = load_model(model_path)

    # Load image
    img = np.array(
        keras.preprocessing.image.load_img(
            image, target_size=(224, 224)
        )
    )

    # Get prediction
    name, disease = get_prediction(model, categories, img)

    if run_inference == True:
        llm = OpenAI(model_name="text-ada-001", n=2, best_of=2)
        question = f"Please tell me about {disease} disease in plants, it's symptoms and how to prevent it."
        result = llm(question)
        return {"disease": disease, "name": name, "inference": result}
    # Return prediction
    return {"disease": disease, "name": name}