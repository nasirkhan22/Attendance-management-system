import React from "react";
import { useNavigate } from "react-router-dom";

import './section.style.css'

const Sections = () => {
 const navigate= useNavigate();
    return(
        <div className="component">
            <h1>Attendnace Management System</h1>
            <div className="container1" onClick={()=> navigate('/login') }>
                <div className="content1">
                    <h1 className="title">User login</h1>
                    <span className="subtitle">Click to login</span>
                </div>
                </div>
                <div className="container1" onClick={()=> navigate('/adminlogin') }>
                <div className="content1">
                    <h1 className="title">Admin login</h1>
                    <span className="subtitle">Click to login</span>
                </div>
                </div>
        </div>
    )
    
}
export default Sections;