import React, { useState } from "react";
import "./legalframe.css";

const LegalFramework = () => {
  const [documents, setDocuments] = useState([
    { name: "Business registration document", type: "Legal", date: "22-02-2025" }
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    id: "",
    address: "",
    businessType: "",
    legalState: "",
    document: null,
  });

  const handleInputChange = (e) => {
    setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCompanyInfo({ ...companyInfo, document: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyInfo.name && companyInfo.document) {
      const newDocument = {
        name: companyInfo.name + " Document",
        type: "Legal",
        date: new Date().toLocaleDateString(),
      };
      setDocuments([...documents, newDocument]);
      setCompanyInfo({
        name: "",
        id: "",
        address: "",
        businessType: "",
        legalState: "",
        document: null,
      });
    } else {
      alert("Please fill all fields and upload a document.");
    }
  };

  const handleDelete = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="legal-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SalveHRMS</div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Employee Data</li>
          <li>Payroll</li>
          <li className="active">Legal Framework</li>
          <li>Leave Management</li>
          <li>User Support</li>
        </ul>
        <div className="profile-icon"></div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Company Registration Form */}
        <div className="company-registration">
          <h2>Company Registration</h2>
          <form onSubmit={handleSubmit}>
            <label>Company Name:</label>
            <input type="text" name="name" value={companyInfo.name} onChange={handleInputChange} required />

            <label>Company ID:</label>
            <input type="text" name="id" value={companyInfo.id} onChange={handleInputChange} required />

            <label>Company Address:</label>
            <input type="text" name="address" value={companyInfo.address} onChange={handleInputChange} required />

            <label>Business Type:</label>
            <input type="text" name="businessType" value={companyInfo.businessType} onChange={handleInputChange} required />

            <label>Legal State:</label>
            <input type="text" name="legalState" value={companyInfo.legalState} onChange={handleInputChange} required />

            <label>Upload Documents:</label>
            <input type="file" onChange={handleFileChange} required />

            <button type="submit" className="submit-info">Submit Info</button>
          </form>
        </div>

        {/* Document Management */}
        <div className="document-management">
          <h2>Document Management</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Document Type</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>{doc.date}</td>
                  <td>
                    <span className="delete-icon" onClick={() => handleDelete(index)}>🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="upload-doc">Upload Document</button>
          <button className="submit-registration">Submit Registration</button>
        </div>
      </div>

      {/* Legal Support (Placed Below Document Management) */}
      <div className="legal-support">
        <button className="view-faqs">View FAQ's</button>
        <button className="contact-expert">Contact Legal Expert</button>
      </div>
    </div>
  );
};

export default LegalFramework;
