import React from 'react'
import { useContext , useEffect } from 'react';
import { DataContext } from '../Context/DataContext';
import {FiSearch} from 'react-icons/fi';
import Faq from './Faq';
import '../Assets/css/style.css'
import { useState } from 'react';


const Home = () => {
    const { setUserPrompt , userPrompt , generateImage , imageDataNew , loading } = useContext(DataContext)


    const handleSurprise = () => {
        const promptData  = imageDataNew.map(item =>  item.prompt) 
        const init =  Math.floor(Math.random() * promptData.length)
        setUserPrompt(promptData[init])
      }

  return (
    <>
    <div className='container'>
     <div className='home-wrapper'>
          <div className='logo-wrapper'>
            <h1> Your Dall-e Inspiration For Creativity</h1>
            <p>Have an idea in mind? Think of a prompt and get to generating the most mind-blowing images <br />for your projects. That too for FREE!</p>
          </div>
          <div className='imageGenerator_input'>
        <span>
            <FiSearch />
            <input type = "text" placeholder='A sunset on the Sydney Opera House' value={userPrompt}   onChange={(e) => setUserPrompt(e.target.value)} />
            {loading ? 
                <button className={`loading btn`} onClick={(e) => e.preventDefault()}><span className='dots'>Generating</span></button> : 
                <button className='btn' disabled = {userPrompt.length === 0 ? true : false} onClick={() => generateImage()}>Generate</button>}
        </span>
        </div>
          <div className='ImagePage_text'>
            <p>Start with a detailed description</p>
            <button className='btn' onClick={handleSurprise}>Surprise me</button>
          </div>
        </div>
        <ul className='imageData'>
            {imageDataNew.map((item, index) => (
                 <li key = {index}  >
                    <img src = {item.url}/>
                    <p>{item.prompt}</p>
                 </li>
            ))}
        </ul>
        <Faq/>
      </div>
    </>
  )
}

export default Home