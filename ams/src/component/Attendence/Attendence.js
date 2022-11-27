import React from 'react'
import AttendenceNavBar from './AttendenceNavBar'
import MarkAttendence from './MarkAttendence'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function () {
  return (
    <>
   <AttendenceNavBar/> 

   {/* <BrowserRouter>
    <Routes>
        <Route path="/MarkAttendence" element={<MarkAttendence/>}></Route>
        {/* <Route path="/Attendence" element={<Attendence/>}></Route> */}

        
    {/* </Routes>
</BrowserRouter> */} 


    

    </>
  )
}
