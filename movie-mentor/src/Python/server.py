from flask import Flask, jsonify, request
from flask_cors import CORS
import openai

app = Flask(__name__)

CORS(app )

API_KEY = "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"
openai.api_key = API_KEY

@app.route('/ask', methods=['POST'])
def ask_openai():
    user_input = request.json.get('question')
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_input}]
    )  

    print(response.choices[0].message['content'])
    return jsonify(answer=response.choices[0].message['content'])

if __name__ == '__main__':
    app.run(debug=True, port=5000)