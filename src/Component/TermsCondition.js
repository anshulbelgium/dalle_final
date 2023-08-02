import React from 'react'
import { useEffect } from 'react'

const TermsCondition = () => {

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <div>
        <h1>Terms & condition</h1>
        
    </div>
  )
}

export default TermsCondition