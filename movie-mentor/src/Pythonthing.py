import openai

API_KEY = "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"
openai.api_key = API_KEY

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "What is the difference between Celcius and Fahrenheit?"},
    ]
)

print(response)