import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../components/dashboard.css";
import { Pie, Bar ,Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [checkInTime, setCheckInTime] = useState("");

  const handleTimeChange = (event) => {
    setCheckInTime(event.target.value);
  };
  const employeeTypeData = {
    labels: ["Full-Time", "Freelancer", "Probation"],
    datasets: [
      {
        data: [40, 10, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  

  const genderDiversityData = {
    labels: ["Male", "Female", "Team"],
    datasets: [
      {
        label: "Number of Employees",
        data: [40, 26, 10],
        backgroundColor: ["#4BC0C0", "#FF9F40", "#9966FF"],
      },
    ],
  };

  const payrollData = {
    labels: ["Processed", "Pending"],
    datasets: [
      {
        data: [140, 25],
        backgroundColor: ["#4CAF50", "#FF0000"],
      },
    ],
  };

  const employeeDepartmentData = {
    labels: ["Development", "Design", "Marketing", "HR", "Others"],
    datasets: [
      {
        data: [65,40,20,5,10],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  

  return (
    <div className="dashboard">
      <nav><Navbar /></nav>

      <div className="content">
        <h2>HELLO, HRM</h2>
        <p>WELCOME TO DASHBOARD</p>

        <div className="charts-container">
          <div className="chart">
            <h4>Employee Type Distribution</h4>
            <Pie data={employeeTypeData} />
          </div>
        <div className="chart">
          <div className="calendar-container">
          <h4>Daily Check-in</h4>
          <Calendar onChange={setDate} value={date} />
          <label>Select Check-in Time:</label>
          <input type="time" value={checkInTime} onChange={handleTimeChange} />
          <p>Selected Date: {date.toDateString()}</p>
          {checkInTime && <p>Check-in Time: {checkInTime}</p>}
        </div>
        </div>

          <div className="chart">
            <h4>Gender Diversity</h4>
            <Bar data={genderDiversityData} />
          </div>

          <div className="chart">
            <h4>Payroll Data</h4>
            <Pie data={payrollData} />
          </div>

          <div className="chart">
            <h4>Employee Data</h4>
            <Doughnut data={employeeDepartmentData} />
          </div>

          
        </div>


        <div className="stats-grid">

          <div className="box">
            <h4>Today Attendance</h4>
            <p>56/66</p>
          </div>
          <div className="box">
            <h4>On-Permission</h4>
            <p>18</p>
          </div>
          <div className="box">
            <h4>Happiness Rate</h4>
            <p>75% 📈</p>
          </div>
          <div className="box">
            <h4>Total Paid Salary</h4>
            <p>₹4,25,750</p>
          </div>
          <div className="box">
            <h4>Next Payroll On</h4>
            <p>30th April</p>
          </div>
          <div className="box">
            <h4>Pending Approvals</h4>
            <p>3 Reimbursements, 5 Leave Approvals</p>
          </div>
        </div>

        <div className="notice-board">
          <h4>Notice Board 📢</h4>
          <p><b>Event Notice:</b> Public notice, implied notice, and constructive notice are different types of legal notices in India.</p>
          <p><b>Pick The Spot for Team Lunch:</b> Help us decide the location for our next team outing.</p>
        </div>

        

      </div>
    </div>
  );
};

export default Dashboard;