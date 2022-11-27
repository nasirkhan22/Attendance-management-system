import './App.css';
import SignUp from './component/SignUp/SignUp'
import SignIn from './component/SignIn/SignIn'
import Attendence from './component/Attendence/Attendence'
import View_attendence from './component/View_Attendence/View_attendence'
import ImageUploader from './component/ImageUploader/ImageUploader'
import Sections from './component/Homepage/homepage.comoponent';


// ????????????Admin File Import???????????
import AdminSignIn from './component/SignIn/adminsignin/adminsignin.componenet';
import AdminSignUp from './component/SignIn/adminsignup/adminsignup.component';
import Admin from '../src/ComponentForAdmin/Admin'
import ViewRecord from './ComponentForAdmin/ViewRecord/ViewRecord';
import LeaveApproval from './ComponentForAdmin/LeaveApproval/LeaveApproval'
import ReportGeneration from './ComponentForAdmin/ReportGeneration/ReportGeneration'
import UpdateAttendence from './ComponentForAdmin/UpdateAttendence/UpdateAttendence';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      
{/* <h1>Attendnace Management System</h1> */}



      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sections/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/adminsignup" element={<AdminSignUp/>}></Route>
        <Route path="/adminlogin" element={<AdminSignIn/>}></Route>
        <Route path="/Attendence" element={<Attendence/>}></Route>
        <Route path="/ViewAttendence" element={<View_attendence/>}></Route>
        <Route path="/admin" element={<Admin/>}>
          <Route path="/admin/ViewRecord" element={<ViewRecord/>}></Route>
          <Route path="/admin/UpdateAttendence" element={<UpdateAttendence/>}></Route>
          <Route path="/admin/ReportGeneration" element={<ReportGeneration/>}></Route>
          <Route path="/admin/LeaveApproval" element={<LeaveApproval/>}></Route>
        </Route>
        <Route path="/Image" element={<ImageUploader/>}></Route>
        
    </Routes>
    
</BrowserRouter>


    </div>



  );
}

export default App;
