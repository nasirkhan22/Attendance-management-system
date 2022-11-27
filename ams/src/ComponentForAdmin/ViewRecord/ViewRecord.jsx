import React from 'react'
import './viewRecord.css'
import { useState,useEffect } from 'react';


export default function ViewRecord() {
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
    <div className='PageContainer'>
        <div className='HeaderBorder'>
        <div className='BoxHeader'>First Name:</div>
        <div className='BoxHeader'>Last Name:</div>
        <div className='BoxHeader'>Email: </div>
        
        <div className='DataLoad'>
          
          {totalUser.map((DataOfUser,i)=>{
            return(
            <div className='BoxBorder' key={UsersDetails[i].Email}>
                <div className='content'>{ UsersDetails[i].Name}</div>
                <div className='content'>{ UsersDetails[i].LName}</div>
                <div className='content'><a>{ UsersDetails[i].Email}</a></div>
                <div className='content'><button>Delete </button></div>
                
              </div>
           
          )}
          )}
        </div>
        </div>

      </div>








  )
}
