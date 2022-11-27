import React from 'react'
import './updateAttendence.css'
import { useState,useEffect } from 'react';

export default function UpdateAttendence() {
  const [UsersDetails, setUsersDetails] = useState([]);
const [totalUser, settotalUser] = useState([])
//////////////FetchBelow//////////////////
async function LoadDataToPage(){

  const response = await fetch('http://localhost:1337/api/admin/ViewRecord',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
})



const data = await response.json();


if(data.status==='ok'){
  

setUsersDetails(data.Detail);
let arr = new Array(data.User).fill({});
settotalUser(arr);
}else{
  alert("Backend Data Error");
}
}
///////////////////////////////////

useEffect(() => {
  LoadDataToPage()
}, [])
  return (
    <div className='update'>

      <h1>UpdateAttendence</h1>
      <div className='PageContainerU'>
        <div className='HeaderBorderU'>
        <div className='BoxHeaderU'>First Name:</div>
        <div className='BoxHeaderU'>Last Name:</div>
        <div className='BoxHeaderU'>Email: </div>
        
        <div className='DataLoadU'>
          
          {totalUser.map((DataOfUser,i)=>{
            return(
            <div className='BoxBorderU' key={UsersDetails[i].Email}>
                <div className='contentU1'>{ UsersDetails[i].Name}</div>
                <div className='contentU2'>{ UsersDetails[i].LName}</div>
                <div className='contentU3'>{ UsersDetails[i].Email}</div>
                <div className='contentU4'><button>update </button></div>
                
              </div>
           
          )}
          )}
        </div>
        </div>

      </div>
      </div>








  )
}

