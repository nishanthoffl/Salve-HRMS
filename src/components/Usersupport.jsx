import React from 'react';
import './usersupport.css';

const UserSupport = () => {
    return (
        <div className="usersupport-container">
            <nav className="navbar">
                <div className="logo">SalveHRMS</div>
                <ul className="nav-links">
                    <li>Dashboard</li>
                    <li>Employee Data</li>
                    <li>Payroll</li>
                    <li>Legal Framework</li>
                    <li>Leave Management</li>
                </ul>
                <div className="user-profile">
                    <button className="user-support-btn">User Support</button>
                </div>
            </nav>

            <div className="support-content">
                <div className="support-form">
                    <h2>Support Portal</h2>
                    <label>Leave Type :</label>
                    <input type="text" className="input-field" />
                    <label>Description :</label>
                    <textarea className="input-field"></textarea>
                    <button className="submit-btn">Submit Request</button>
                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p>Email: simpery@gmail.com</p>
                        <p>Phone: 9876543210</p>
                    </div>
                </div>

                <div className="faq-ticketing">
                    <div className="faq-section">
                        <h3>Frequently Asked Questions (FAQ's)</h3>
                        <div className="faq-item">question 1 ?</div>
                        <div className="faq-item">question 2 ?</div>
                        <div className="faq-item">question 3 ?</div>
                    </div>

                    <div className="ticketing-system">
                        <h3>Ticketing System</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Issue Type</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>document</td>
                                    <td>cleared</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSupport;
