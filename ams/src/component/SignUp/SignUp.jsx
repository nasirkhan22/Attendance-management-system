import React from 'react'
import './signup.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";



export default function SignUp() {  
  const navigate = useNavigate()
  const [Name, setName] = useState("");
  const [Last, setLast] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
 
  async function Register(){
    const response = await fetch('http://localhost:1337/api/regester',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Name,
      Last,
      Email,
      password,
    }), 
  })
  const data = await response.json();
console.log(data);

if(data.status==='ok'){
  navigate("/login");
 
  };
}
const AlreadyHaveAccount=()=>{
  navigate("/login"); 
}


  return (
    <div className='form'>
      <div className='form-body'>
        <h1>User SignUp</h1>
        <div className='first-name'>
        <label className="form__label">First Name </label>
        <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="First Name"></input>
        </div>
        <div className='last-name'>
        <label className="form__label">Last Name </label>
        <input value={Last} onChange={(e)=>{setLast(e.target.value)}} type="text" placeholder="Last name"></input>
        </div>
        <div className='email'>
        <label className="form__label">email</label>
        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="email"></input>
        </div>
        <div className='password'>
        <label className="form__label">password </label>
        <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="password" placeholder="password"></input>
        </div>
        <button onClick={Register} className='gragientColor2' type="submit">SignUp</button>
        <button onClick={AlreadyHaveAccount} className='gragientColor2' >Already have Account</button>
    
        
      </div>

      
      
      </div>
  )
}
