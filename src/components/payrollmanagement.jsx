import React, { useState } from "react";
import "./PayrollManagement.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const PayrollManagement = () => {
  const [employees, setEmployees] = useState([
    { id: "001", name: "Nishanth K", salary: 35000, deduction: 2500, netSalary: 32500, isEditing: false },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    hoursWorked: "",
    overtime: "",
    taxDeductions: "",
    otherDeductions: "",
    baseSalary: "",
  });

  const [salaryBreakdown, setSalaryBreakdown] = useState({
    baseSalary: "",
    deductions: "",
    netSalary: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
    setSalaryBreakdown((prev) => ({ ...prev, [name]: value }));
  };

  const handleGeneratePayroll = () => {
    const { baseSalary, taxDeductions, otherDeductions } = newEmployee;

    if (!baseSalary || isNaN(baseSalary) || baseSalary <= 0) {
      alert("Enter a valid base salary.");
      return;
    }

    const totalDeductions = parseFloat(taxDeductions || 0) + parseFloat(otherDeductions || 0);
    const netSalary = parseFloat(baseSalary) - totalDeductions;

    setSalaryBreakdown({
      baseSalary,
      deductions: totalDeductions,
      netSalary,
    });
  };

  const handleAddEmployee = () => {
    const { id, name, baseSalary, taxDeductions, otherDeductions } = newEmployee;

    if (!id || !name || isNaN(baseSalary) || baseSalary <= 0) {
      alert("Please enter valid employee details.");
      return;
    }

    const totalDeductions = parseFloat(taxDeductions || 0) + parseFloat(otherDeductions || 0);
    const netSalary = parseFloat(baseSalary) - totalDeductions;

    setEmployees([
      ...employees,
      { id, name, salary: parseFloat(baseSalary), deduction: totalDeductions, netSalary, isEditing: false },
    ]);

    setNewEmployee({ id: "", name: "", hoursWorked: "", overtime: "", taxDeductions: "", otherDeductions: "", baseSalary: "" });
    setSalaryBreakdown({ baseSalary: "", deductions: "", netSalary: "" });
  };

  return (
    <div className="payroll-container">
      <nav className="navbar">
        <span className="brand">SalveHRMS</span>
        <div className="nav-links">
          <button>Dashboard</button>
          <button>Employee Data</button>
          <button className="active">Payroll</button>
          <button>Legal Framework</button>
          <button>Leave Management</button>
          <button>User Support</button>
        </div>
      </nav>

      <div className="payroll-section">
        <h2>Payroll Management</h2>

        <div className="payroll-form">
          <div className="form-left">
            <div className="input-group">
              <label>Employee ID:</label>
              <input type="text" name="id" value={newEmployee.id} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Employee Name:</label>
              <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Hours Worked:</label>
              <input type="number" name="hoursWorked" value={newEmployee.hoursWorked} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Overtime:</label>
              <input type="number" name="overtime" value={newEmployee.overtime} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Tax Deductions:</label>
              <input type="number" name="taxDeductions" value={newEmployee.taxDeductions} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Other Deductions:</label>
              <input type="number" name="otherDeductions" value={newEmployee.otherDeductions} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Base Salary:</label>
              <input type="number" name="baseSalary" value={newEmployee.baseSalary} onChange={handleInputChange} />
            </div>

            <button className="calculate-btn" onClick={handleGeneratePayroll}>Generate Payslip</button>
          </div>

          <div className="salary-breakdown">
            <h3>Salary Breakdown</h3>
            <div className="input-group">
              <label>Base Salary:</label>
              <input type="number" name="baseSalary" value={salaryBreakdown.baseSalary} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Deduction:</label>
              <input type="number" name="deductions" value={salaryBreakdown.deductions} onChange={handleInputChange} />
            </div>

            <div className="input-group">
              <label>Net Salary:</label>
              <input type="number" name="netSalary" value={salaryBreakdown.netSalary} onChange={handleInputChange} />
            </div>

            <button className="add-btn" onClick={handleAddEmployee}>Add Employee</button>
          </div>
        </div>

        <div className="processed-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Deduction</th>
                <th>Net Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary.toLocaleString()} ₹</td>
                  <td>{emp.deduction.toLocaleString()} ₹</td>
                  <td>{emp.netSalary.toLocaleString()} ₹</td>
                  <td>
                    <button className="edit-btn"><FaEdit /></button>
                    <button className="delete-btn"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="export-btn">EXPORT as CSV</button>
      </div>
    </div>
  );
};

export default PayrollManagement;
