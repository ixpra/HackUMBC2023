from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
import re

app = Flask(__name__)

CORS(app)

API_KEY = "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"
openai.api_key = API_KEY


@app.route('/ask', methods=['POST'])
def ask_openai():
    user_input = "can you give me movies recommendations based on" + request.json.get('question') + "and put the title of the movies \
    in curly braces, and the description of the movies in brackets respectively. Do not give any more information than that. "

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
