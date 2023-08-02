import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ResultContext } from '../Context/ResultContext';


const Image = ({data,index, historyData, setHistoryData, homeImageDisabled}) => {
    const {handleImage, userPrompt , imageDataNew} = useContext(ResultContext);
    const [hide, setHide] = useState(false);

    return (
            <>
                <li onClick={() => handleImage(`${data.url}`)} onMouseEnter={() => setHide(true)} onMouseLeave={() => setHide(false)} >
                    {
                        homeImageDisabled ? 
                        <span>
                            <img src={data.url} alt={data?.prompt} />
                            {hide && <p>{data?.prompt || userPrompt}</p> } 
                        </span>
                        :
                        <Link to={`/images?img=${data.url}&id=${index}`} className="text-decoration-none">
                            <img src={data.url} alt={data?.prompt} />
                            {hide && <p>{data?.prompt || userPrompt}</p> }
                                {/*                         
                            {hide && <div className={`image-hover-wrapper`}>
                                <img src={data.url} />
                                <p>lorem ipsum dolor sit amet</p>
                            </div>} */}
                        </Link>
                    }
                    
                </li>
            </>
        
  )
}

export default Image