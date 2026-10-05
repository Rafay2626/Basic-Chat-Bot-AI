# 🤖 My AI Website

A personal AI chat website built with **Python, Flask, HTML, CSS, JavaScript, and OpenAI API**.

## ✨ Features

- 🤖 AI Chat
- 💬 Send messages
- ⌨️ Enter key to send
- 🎨 Modern AI-themed UI
- 🌌 Custom background
- ⚡ Flask backend
- 🔐 Secure API key using `.env`

## 🛠️ Technologies

- Python
- Flask
- OpenAI API
- HTML
- CSS
- JavaScript

## 📁 Project Structure

My AI Website/
├── app.py
├── .env
├── .gitignore
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── style.css
    ├── script.js
    └── background.avif

## 🚀 Installation

### 1. Install Python

Download Python from:
https://www.python.org/downloads/

Check installation:

py --version

### 2. Create Virtual Environment

py -m venv .venv

Activate it:

.venv\Scripts\Activate.ps1

If PowerShell gives an error:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Then activate again:

.venv\Scripts\Activate.ps1

### 3. Install Packages

pip install flask openai python-dotenv

### 4. Add API Key

Create a `.env` file:

OPENAI_API_KEY=YOUR_API_KEY_HERE

⚠️ Never upload `.env` to GitHub.

Your `.gitignore` should contain:

.env
.venv/
__pycache__/
*.pyc

## ▶️ Run the Website

Activate the virtual environment:

.venv\Scripts\Activate.ps1

Run Flask:

python app.py

Then open:

http://127.0.0.1:5000

## 🔄 Update GitHub

After making changes:

git add .
git commit -m "Update website"
git push

## 🧠 How It Works

User
↓
HTML / CSS / JavaScript
↓
Flask Backend
↓
OpenAI API
↓
AI Response
↓
Website

## 👨‍💻 Author

**Abdul Rafay**

Learning Python, Linux, Web Development, C++, and AI Development.

## 📚 Purpose

This project was created to learn how **Frontend + Python Backend + AI API** work together.
