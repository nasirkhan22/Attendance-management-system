import React from 'react'
import leaveApproval from "./leaveApproval.css"
export default function LeaveApproval() {

 async function LeaveAppr(){
const Apple='sqs';
const responce= await fetch('http://localhost:1337/api/admin/LeaveApproval',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    NumberA:'102',
    Apple,
  }),

  
})

const data = await responce.json();
console.log(data);

 }
  
  
  
  return (
    <div>LeaveApproval

      <button onClick={LeaveAppr}>LeaveAppr</button>
    </div>
  )
}
