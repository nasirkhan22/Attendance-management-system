import React, { useState,useEffect  } from 'react'
import './attendence.css'
import DemoImage from '../../Images/person.PNG'
import MarkAttendence from './MarkAttendence'
import MarkLeave from './MarkLeave'
import { useNavigate } from "react-router-dom";



export default function AttendenceNavBar() {
    const [IsLogIn, setIsLogIn] = useState(true);
    const [Email, setEmail] = useState("");
    useEffect(() => {
        const Email = JSON.parse(localStorage.getItem('Email'));
        if (Email) {
         setEmail(Email);         

        }
    }, []);
   
//-----------------------------------------------------------------------

// On clicking User Image We can see his email
const [clickedUserImage,setclickedUserImage]= useState(false);

const OnClickUserImage=()=>{
    setclickedUserImage(!clickedUserImage);
}
//-----------------------------

useEffect(() => {
    localStorage.setItem('Email', JSON.stringify(Email));
  }, [Email]);

const handleLogOut=()=>{
setEmail=("");
console.log('Clicked')
}

//----------------------

const navigate =useNavigate();

const handleViewAtten=()=>{
    navigate("/ViewAttendence");  
}



    const [Buttonvalue, setButtonvalue] = useState(true); //Button to switch page


    const ButtonMarkClicked=()=>{
        setButtonvalue(true);
    }
    const ButtonLeaveClicked=()=>{
        setButtonvalue(false);
        console.log(Buttonvalue);
    }
     
  return (
    
    // <div className='' onLoad={Isloged()}>
    // {(IsLogIn) && 
    <>
    <div className='NavBar'>
        <div className='NavLogo'>
            <h2>Attendnace Management System</h2>
        </div>
        <div className='NavLinks'>
           <button className='ButtonMark' onClick={ButtonMarkClicked}>
                Mark Attendence
            </button>
            <button className='Button' onClick={handleViewAtten}>
                View Attendence
            </button>
            <button className='ButtonLeave' onClick={ButtonLeaveClicked}>
                Mark Leave
            </button>
            <button onClick={handleLogOut} href='/login'>LogOut</button>
            
        </div>
        <div className='Image'>
                <img src={DemoImage} onClick={OnClickUserImage}></img>
        </div>
    </div>




    { (clickedUserImage) &&
     <div className="ImagePersonalDetail">
        <div className="DetailBox">
           <p>{Email}</p>
           
            {/* <a onClick={handleLogOut} href='/login'>LogOut</a> */}
            {/* <h3  onClick={()=>{navigate("/admin")}}>Admin</h3> */}
           
        </div>
    </div>
}

















{(Buttonvalue) && <MarkAttendence/>}
{(!Buttonvalue) && <MarkLeave/>}
</>
// }


// </div>
  )
}
