import React, { useContext, useEffect, useState } from 'react'
import {ResultContext} from './Context/ResultContext';
import Image from './Component/Image';


const Result = () => {
  const {value, imageDataNew , } = useContext(ResultContext);
  
  const values = JSON.parse(localStorage.getItem("imageUrl"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className='result-page'>
      <div className='container mt-5'>
        <ul className='imageData'>
          {values.map((item, index) => <Image key={index} index={index} data={item} />)}
        </ul>
      </div>
    </div>
  )
}

export default Result;