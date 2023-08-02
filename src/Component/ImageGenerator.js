import React, { useContext, useEffect, useRef } from 'react';
import '../Assets/css/style.css';
import {ResultContext} from '../Context/ResultContext';
import Image from './Image';
import Searchbar from './Searchbar';
import Faq from './Faq';
import HowItsWork from './HowItsWork';
import { Helmet } from 'react-helmet';
 
const ImageGenerator = ({HowItWorkSec, FaqSec}) => {
  const { value, setUserPrompt, imageDataNew, isloading , iframe , setIframe } = useContext(ResultContext);
  const inputRef = useRef(null);
  const howItsWork = useRef();

  const handleSurprise = () => {
    const promptData  = imageDataNew.map(item =>  item.prompt) 
    const init =  Math.floor(Math.random() * promptData.length)
     setUserPrompt(promptData[init]);
  }

  useEffect(() => {
    setUserPrompt("");
    // inputRef.current.focus();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home-page'>        
      <Helmet>
        <meta charSet="utf-8" />
        <title>AI Image Generator | Craft Your Own Art With AI Generator- Dall- E Free</title>
        <meta name="description" content="Dall-E Free is an AI Image generator app, which channels text to AI images programming to create AI for you. Enter a prompt and see your AI images come to life."></meta>
      </Helmet>

      <div className='container'>
        <div className='home-wrapper'>
          <div className='logo-wrapper'>
            <div className='hero-heading mb-5 text-center'>
              <h1>Dall-e</h1>
              <p>Inspiration For Creativity</p>
            </div>
            {/* <h1 className='mb-5'> Your Dall-e Inspiration For Creativity</h1> */}
            {/* <p>Have an idea in mind? Think of a prompt and get to generating the most mind-blowing images <br />for your projects. That too for FREE!</p> */}
          </div>

          {/* <Searchbar inputRef={inputRef} />

          <div className='ImagePage_text'>
            <p>Start with a detailed description</p>
            <button className='btn' onClick={handleSurprise}>Surprise me</button>
          </div> */}

          <div className='dalle-wrap' style={{overflow: "hidden"}}>
            <iframe src="https://runwayml-stable-diffusion-v1-5.hf.space/?__theme=light" width="100%" height="850px" scrolling='no' style={{marginTop: "-120px", overflow: "hidden"}}></iframe>
          </div>
        </div>

        <ul className='imageData'>
            {
              imageDataNew.slice(0, 8).map((item, i) => <Image key={i} data={item} index={i} homeImageDisabled />)
            }
        </ul>

        <HowItsWork HowItWorkSec={HowItWorkSec} />

        <Faq FaqSec={FaqSec} />
      </div>
    </div>
  )
}

export default ImageGenerator