import React from 'react'
import './admin.css'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='AdminContainer'>
        <div className='AdminNavBar'>
            <div className='logo'>
                <label>Attendance Management System</label>
            </div>
            <div className='NavLink'>
                <div className='NavLinkInnerContainer'>
                    <a href="/admin/ViewRecord">View Record</a>
                    <a href="/admin/UpdateAttendence">Update Attendence</a>
                    <a href="/admin/ReportGeneration">Create Report</a>
                    <a href="/admin/LeaveApproval">Leave Approval </a>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}
