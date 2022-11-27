import React, { useRef } from 'react'
import AttendenceNavBar from '../Attendence/AttendenceNavBar';
import  './viewAtten.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function View_attendence() {

  /////////////////UseState////////
  const [dataAttendence,setdataAttendence]=useState([]);
  const [dateOfAtten,setdateOfAtten]=useState([]);





  const navigate =useNavigate();
  const NavigateToHome=()=>{
    navigate('/Attendence')
  }

//////////////////fetch Data//////////////////////////////

const handleViewAttendence=async()=>{
  let data="";
  const response = await fetch('http://localhost:1337/api/ViewAttendence',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    Email,
  }), 
})
data = await response.json();
console.log("Data",data);
setdataAttendence(data.DataAtten);
setdateOfAtten(data.DateData);
}






///////////////////////////
const [Email, setEmail] = useState("");
    useEffect(() => {
        const Email = JSON.parse(localStorage.getItem('Email'));
        if (Email) {
         setEmail(Email);         
        }
    }, []);
/////////////////////

  
 
 
   
 

  const renderList=()=>{
    return(
    dataAttendence.map((dateofPerson,i)=>{
      return(
      <div key={dateOfAtten[i]} className='DataTable'>
      <div className='BoxOfData'><h4>{dateofPerson}</h4></div>
      <div className='BoxOfData'><h4>{dateOfAtten[i]}</h4></div>
      </div>)
    
    }))
  }
  return (
  <div className='MainDisp'>
    <div className='NavigationButton'>
      <button onClick={NavigateToHome}>Home</button>
      <button onClick={handleViewAttendence}>View</button>
    </div>
    <div className='DataFolder' >
    
    {renderList()}

    </div>
    </div>
 
  )
}
