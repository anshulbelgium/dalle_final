import React, { useContext } from 'react'
import { ResultContext } from '../Context/ResultContext'

const History = () => {
  const {history} = useContext(ResultContext);

  return (
    <div>
       {history.map(img => (
        <img src = {img}/>
       ))}
    </div>
  )
}

export default History