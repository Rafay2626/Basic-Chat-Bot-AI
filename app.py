from flask import Flask, render_template, request, jsonify
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"reply": "Please write a message."})

    response = client.responses.create(
        model="gpt-6-luna",
        input=user_message
    )

    return jsonify({
        "reply": response.output_text
    })


if __name__ == "__main__":
    app.run(debug=True)