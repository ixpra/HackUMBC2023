import openai

API_KEY = open("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",  "r").read()
openai.api_key = API_KEY

response = openai.ChatCompletion.create(
    model="gpt-4",
    message=[
        {"role": "user", "content": "What is the difference between Celcius and Fahrenheit?"},
    ]
)

print(response)