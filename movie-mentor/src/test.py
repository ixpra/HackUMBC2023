from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Setup OpenAI
openai.api_key = 'YOUR_OPENAI_API_KEY' # You should use environment variables here!

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-completion', methods=['POST'])
def get_completion():
    prompt = request.json.get('prompt')
    try:
        completion = openai.Completion.create(
            model='gpt-3.5-turbo',
            prompt=prompt,
            temperature=1,
            max_tokens=350,
        )
        return jsonify({"result": completion.choices[0].text})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

