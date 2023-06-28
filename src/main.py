import os
import json
import numpy as np
from tensorflow import keras
from fastapi import FastAPI, UploadFile, File
import argparse
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


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
async def predict_disease(image: str):
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

    # Return prediction
    return {"disease": disease, "name": name}
