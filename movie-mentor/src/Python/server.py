from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
import re
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

CORS(app)

API_KEY = "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"
openai.api_key = API_KEY


@app.route('/ask', methods=['POST'])
def ask_openai():
    user_input = "give movies similar to" + request.json.get('question') + "and put the title of the movies \
    in curly braces, and the description of the movies in parenthesisrespectively. Do not give any more information than this and do not have\
    Embeded Parenthesis anywhere. "

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_input}]
    )
    text = response.choices[0].message['content']
    titles = re.findall(r"\{(.*?)\}", text)
    descriptions = re.findall(r"\((.*?)\)", text)

    movie_data = [{"title": t, "description": d}
                  for t, d in zip(titles, descriptions)]
    return jsonify(movies=movie_data)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
