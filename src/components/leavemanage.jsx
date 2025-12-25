import React, { useState } from "react";
import "./leavemanage.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const LeaveManage = () => {
  const [leaveBalance, setLeaveBalance] = useState({
    "Sick Leave": 4,
    "Casual Leave": 2,
    "Paid Leave": 5,
  });

  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState([]);

  const handleApplyLeave = () => {
    if (leaveType && fromDate && toDate && reason) {
      const daysRequested =
        Math.ceil((new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24)) + 1;

      if (leaveBalance[leaveType] >= daysRequested) {
        const newRequest = {
          id: leaveRequests.length + 1,
          employeeName: "Nishanth",
          leaveType,
          fromDate,
          toDate,
          reason,
          status: "Pending",
        };

        setLeaveRequests([...leaveRequests, newRequest]);
        setLeaveBalance((prevBalance) => ({
          ...prevBalance,
          [leaveType]: prevBalance[leaveType] - daysRequested,
        }));

        setLeaveType("");
        setFromDate("");
        setToDate("");
        setReason("");
      } else {
        alert("Not enough leave balance available.");
      }
    }
  };

  const handleApprove = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: "Approved" } : request
    );

    const approvedRequest = leaveRequests.find((request) => request.id === id);
    setLeaveRequests(updatedRequests);
    setHistory([...history, approvedRequest]);
  };

  const handleReject = (id) => {
    setLeaveRequests(leaveRequests.filter((request) => request.id !== id));
  };

  return (
    <div className="leave-container">
      <nav className="navbar">Leave Management System</nav>

      <div className="main-content">
        <div className="left-section">
          <div className="leave-form">
            <h2>Apply for Leave</h2>
            <label>Leave Type:</label>
            <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
              <option value="">Select</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Paid Leave">Paid Leave</option>
            </select>

            <label>From Date:</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

            <label>To Date:</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

            <label>Reason:</label>
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} />

            <button onClick={handleApplyLeave}>Apply Leave</button>
          </div>
        </div>

        <div className="right-section">
          <div className="leave-table">
            <h2>Leave Balance</h2>
            <table>
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(leaveBalance).map(([type, balance]) => (
                  <tr key={type}>
                    <td>{type}</td>
                    <td>{balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="tables-container">
        <div className="leave-approval">
          <h2>Manager Leave Approvals</h2>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.employeeName}</td>
                  <td>{request.leaveType}</td>
                  <td>{request.fromDate}</td>
                  <td>{request.toDate}</td>
                  <td>{request.status}</td>
                  <td>
                    <FaCheck className="icon approve" onClick={() => handleApprove(request.id)} />
                    <FaTimes className="icon reject" onClick={() => handleReject(request.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="leave-history">
          <h2>Leave History</h2>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((record, index) => (
                <tr key={index}>
                  <td>{record.employeeName}</td>
                  <td>{record.leaveType}</td>
                  <td>{record.fromDate}</td>
                  <td>{record.toDate}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveManage;
