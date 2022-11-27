import React from 'react'
import markAttendencee from './markAttendence.css'
import { useState,useEffect } from 'react';

export default function MarkAttendence() {
    const [buttDis,setbuttDis] = useState(true);

    //----------------------Date--------------------------
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  date=date.toString();
//   =------------------Getting Data from Local Storage--------------------
const [NameStr, setNameStr] = useState("");
useEffect(() => {
    const NameStr = JSON.parse(localStorage.getItem('UseN'));
    if (NameStr) {
        setNameStr(NameStr);


    }
}, []);
// ...................................................

const [RadioButton, setRadioButton] = useState(false)
//_______________________GetUserDetail(Email) From local storage______________________________

const [IsLogIn, setIsLogIn] = useState(false);
const [Email, setEmail] = useState("");
    useEffect(() => {
        const Email = JSON.parse(localStorage.getItem('Email'));
        if (Email!="") {
         setEmail(Email); 
         setIsLogIn(true);
        }
    }, []);

//-------------------------------------------------------
let boo=false;
const EnableSubmitB=()=>{
    setbuttDis(boo);

}


//_________________________________________________________

async function SubmitAttendence(){
    
    const response = await fetch('http://localhost:1337/api/Attendence',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Email,
      RadioButton,
    }), 
  })
  const data = await response.json();


if(data.status==='ok'){
    console.log("MarkedAttendenceSection")
    console.log(data.status);
 
 }else if(data.status==='Marked'){
    setbuttDis(true);
    alert("Attendence Marked");
 }
 else if(data.status==='WasMarked'){
    alert("Attendence Can not be Marked Twice on a day");
    setbuttDis(true);
 }
 
}



    return (
        <>
    {(IsLogIn) && 
    <div className='Header'>
        <div className='personName'>
       <span>Welcome {NameStr}</span>
        </div>
        <div className="Mark_Attendence">
            <h3 className='box'>Mark Attendence</h3>
            <h3 className='box'>{date}</h3>

            <div className='box'>
                <h5>present</h5>
                <input  value="present" onClick={EnableSubmitB} onChange={(e)=>{setRadioButton(e.target.value)}} type="radio" name='Mark'/> 
            </div>
            

            <div className='box'>
                <h5>Absent</h5>
                <input value='absent' onClick={EnableSubmitB} onChange={(e)=>{setRadioButton(e.target.value);}} type="radio" name='Mark' /> 
            </div>
           
            
        </div>
        <div className='SubmitButton'>
            <button disabled={buttDis} onClick={SubmitAttendence} >Submit</button>
        </div>

    </div>
}
{(!IsLogIn) &&
<div className='NotLogedIn'>
    Please login....</div>}
</>
  )
}
