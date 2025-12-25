import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import EmployeeData from "./components/employeedata";
import Dashboard from "./components/Dashboard";
import PayrollManagement from "./components/payrollmanagement";
import LeaveManage from "./components/leavemanage";
import LegalFramework from "./components/legalframe";
import "bootstrap/dist/css/bootstrap.min.css"; 
import leaveManage from "./components/leavemanage";
import UserSupport from "./components/Usersupport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employeedata" element={<EmployeeData />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payrollmanagement" element={<PayrollManagement />} />
        <Route path="/legalframe" element={<LegalFramework />} />
        <Route path="/leavemanage" element={<LeaveManage/>} />
        <Route path="/Usersupport" element={<UserSupport/>} />
      </Routes>
    </Router>
  );
}

export default App;
