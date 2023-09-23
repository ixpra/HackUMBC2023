require('dotenv').config();
const OpenAI = require('openai').OpenAI;
const openai = new OpenAI()

async function main(){
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
        {
            role:'system',
            content:'You are Coder bruh'
        },
        {
            role:'user',
            content:'Hello! What is your Name?'
        },
    ], 
});

console.log(response)
}
main()