import React, { useContext, useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import {ResultContext}  from '../Context/ResultContext';

const Searchbar = ({inputRef}) => {
    const {userPrompt, setUserPrompt, generateImage, isloading} = useContext(ResultContext);
    const [isInputFocused, setIsInputFocused] = useState(false);
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          generateImage()
        }
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    
    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    
    return (
        <div className='imageGenerator_input'>
        <span style={{boxShadow: (isInputFocused) ? "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)"}}>
            <FiSearch />
            <input type = "text" onFocus={handleInputFocus} onBlur={handleInputBlur} placeholder='A sunset on the Sydney Opera House' value={userPrompt} ref={inputRef} onKeyDown={handleKeyPress}  onChange={(e) => setUserPrompt(e.target.value)} />
            {
                isloading ? 
                <button className={`loading btn`} onClick={(e) => e.preventDefault()}><span className='dots'>Generating</span></button> : 
                <button className='btn' disabled = {userPrompt.length === 0 ? true : false} onClick={() => generateImage()}>Generate</button>
            }
        </span>
        {/* <button className='btn upload-btn'><img src={Upload} alt='' /> Upload</button> */}
        </div>
    )
}

export default Searchbar