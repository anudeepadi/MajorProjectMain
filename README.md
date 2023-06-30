# Major Project
## Steps to Install Packages
To install the necessary packages for the social media project, follow these steps:
1. Open the command prompt or terminal.
2. Navigate to the "socialMedia" directory using the following command:
```bash 
cd socialMedia 
```
3. Initialize a new npm project by running the command:
```bash
npm init --y
```
4. Install the required packages by running the command:
```bash
npm install
```
## Steps to Start the Project
To start the social media project, follow these steps:
1. Open the command prompt or terminal.
2. Navigate to the "social media" directory using the following command:
```bash
cd social media
```
Start the project by running the command:
```bash
npm start
```
3. Open the "index.html" file in a Chrome browser to access the project.
## Steps for Python Backend
### To set up the Python backend for the project, make sure you have the following libraries installed: fastapi, python-multipart, tensorflow, numpy, matplotlib, and opendatasets.

## Follow these steps:
1. Install the required Python libraries using pip or any package manager of your choice.
2. Navigate to the "Plant-diseases" folder in your command prompt or terminal.
3. Enter the "src" directory using the following command:
```bash
cd src
```
4. Run the following command to start the backend server:
```bash
uvicorn main:app --reload
```
5. Add the images you want to analyze for plant diseases to the "src" folder.
6. In the API endpoint provided in Swagger, paste the image path (e.g., image1.jpg).
7. Download the plant disease dataset from the following link: Plant Disease Dataset
8. Make sure to follow the necessary steps and requirements to run the project successfully.

## Additional Steps
## Setting Environment Variables for API Keys

To set environment variables in order to access sensitive keys, you can follow these steps:

### Step 1: Create an `.env` file

Create a file in your project's root directory called `.env`. This file will store your environment variables.

### Step 2: Assign values to your environment variables

Inside the `.env` file, add the key-value pairs for your environment variables. For example:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
WOLFRAM_ALPHA_APPID=your_wolfram_alpha_appid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
Replace your_openai_api_key_here, your_wolfram_alpha_appid_here, and your_twilio_auth_token_here with your actual API keys.

Step 3: Load the environment variables in your code
To access these environment variables in your code, you need to load them using a package like python-dotenv. Install the package by running the following command:

bash
Copy code
pip install python-dotenv
Once installed, you can load the environment variables in your code as follows:

python
Copy code
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access the environment variables
openai_api_key = os.environ['OPENAI_API_KEY']
wolfram_alpha_appid = os.environ['WOLFRAM_ALPHA_APPID']
twilio_auth_token = os.environ['TWILIO_AUTH_TOKEN']
Now you can use openai_api_key, wolfram_alpha_appid, and twilio_auth_token variables in your code, which will contain the respective values from the environment variables you set in the .env file.

Make sure to add the .env file to your project's .gitignore file to prevent accidentally committing sensitive information to version control.


### Project done as a part of Major Project Computer Science and Engineering(CSE) Coursework at Hyderabad Institute of Technology and Management(HITAM), Hyderabad. By the following students:
1. Adiraju Venkata Anudeep (4th Year CSE)
2. Bangaru Nihal (4th Year CSE)
3. Kala Aditya (4th Year CSE)

#### If you want to contribute to this project, please feel free to do so. We would love to see your contributions.
