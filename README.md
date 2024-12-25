# Plant Disease Detection and Social Media Integration Project

## 🌟 Overview
A comprehensive full-stack application that combines plant disease detection using machine learning with social media features. This project was developed as part of the Major Project Computer Science and Engineering (CSE) coursework at Hyderabad Institute of Technology and Management (HITAM), Hyderabad.

## 🚀 Features

### Plant Disease Detection
- Advanced image processing for plant disease identification
- Machine learning model built with TensorFlow
- Real-time disease detection through API endpoints
- Support for multiple plant types and diseases
- Detailed analysis reports

### Social Media Integration
- User authentication and profile management
- Social networking features
- Interactive user interface
- Real-time updates and notifications
- Content sharing capabilities

### Additional Features
- Interactive chat bot for user assistance
- Order management system
- Responsive web design
- Secure API integration
- Environment variable management for sensitive data

## 🛠️ Technology Stack

### Frontend
- HTML5, CSS3, JavaScript
- React.js for UI components
- NPM for package management
- Responsive design framework

### Backend
- Python FastAPI server
- TensorFlow for ML models
- SQLite/PostgreSQL for database
- RESTful API architecture

### ML/AI Components
- TensorFlow for model training
- scikit-learn for data processing
- Pandas for data manipulation
- Matplotlib for visualization
- PIL for image processing

### Development Tools
- Git for version control
- npm for package management
- uvicorn for server deployment
- Docker for containerization

## 📦 Installation

### 1. Social Media Component
```bash
# Navigate to social media directory
cd socialMedia

# Initialize npm project
npm init --y

# Install dependencies
npm install

# Start the application
npm start
```

### 2. Python Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Navigate to src directory
cd src

# Start the FastAPI server
uvicorn main:app --reload
```

### 3. Environment Setup
Create a `.env` file in the root directory with the following variables:
```env
OPENAI_API_KEY=your_openai_api_key
WOLFRAM_ALPHA_APPID=your_wolfram_alpha_appid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

## 📚 Project Structure
```
MajorProjectMain/
├── Prediction/        # ML model and prediction logic
├── assets/           # Static assets and resources
├── orderPage/        # Order management system
├── socialMedia/      # Social media component
├── src/             # Backend source code
│   └── main.py      # FastAPI application
├── .env             # Environment variables
├── .gitignore       # Git ignore rules
├── index.html       # Main entry point
├── requirements.txt  # Python dependencies
└── README.md        # Project documentation
```

## 🔧 Configuration
1. Plant Disease Dataset: Download from the provided link
2. API Keys: Set up in `.env` file
3. Database: Configure connection strings
4. Server: Set up FastAPI configurations
5. Frontend: Configure API endpoints

## 🚀 Usage
1. Start the FastAPI backend server
2. Launch the frontend application
3. Access the system through `index.html`
4. Upload plant images for disease detection
5. Interact with social media features

## 🤝 Contributing
We welcome contributions! Please feel free to submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team Members
- Adiraju Venkata Anudeep (4th Year CSE)
- Bangaru Nihal (4th Year CSE)
- Kala Aditya (4th Year CSE)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- Hyderabad Institute of Technology and Management (HITAM)
- Department of Computer Science and Engineering
- Project Mentors and Advisors
- Open Source Community

## 📞 Contact
For any queries or suggestions, please reach out to the project maintainers:
- GitHub: [@anudeepadi](https://github.com/anudeepadi)