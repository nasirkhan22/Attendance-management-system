import React from 'react'
import  './markLeave.css'

export default function MarkLeave() {
  return (
    <div className='MarkLeaveContainer'>
        <div className='TextBox'>
            <textarea type="text" placeholder='Message to Admin'></textarea>  
              
        </div>
        <div className='ButtonSubmitLeave'>
            <button>Submit</button>
        </div>
    </div>
  )
}
