import React from 'react';
import OpenAI from 'openai';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Completions } from 'openai/resources';

const Test = () => {
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      })
      
      const [prompt, setPrompt] = useState('')  
      const [result, setResult] = useState('')
      const [loading, setLoading] = useState(false) 
    
      const handleChange = async () => {

        setLoading(true)
        try {
            console.log("Hello")
          const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            prompt: prompt,
            temperature: 1,
            max_tokens: 350,
          })
          setResult(completion.choices[0].message.content)
        } catch(error) { 
            console.log(error);
        }
        setLoading(false)
      }
    
      const textAreaStyle = {
        top:"10px",
        left:"40px",
      };
    
      return (
        <>
          <div>
            <textarea 
            style={textAreaStyle}
            value = {prompt}
            placeholder = "Start writing here..."
            onChange = {e => (setPrompt(e.target.value))}
            name="" id="" cols="30" rows="10"></textarea>
            <button onClick={handleChange}> 
              {loading ? 'Loading...' : 'Done'}
            </button>
          </div>
          <div>
            <p>{result}</p>
          </div>
          
          </>
      );
    };
    


export default Test;    