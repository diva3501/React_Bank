import React, { useState } from 'react';


const Form = ({ location }) => {
 
  
  const [formData, setFormData] = useState({
    knNumber: '',
    goldType: '',
    weight: '',
    placeBoughtFrom: '',
    jewelersNameAddress: '',
    photo: '',
    accountHolderName: '',
    jointAccount: '',
    accountType: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend or handle it as needed
    setSubmissionMessage('Application for gold/silver loan is submitted.');
  };

  return (
    <div className="form-container">
      {submissionMessage ? (
          <div className="submission-message">
            <p>{submissionMessage}</p>
          </div>
        ) : (
      <form onSubmit={handleSubmit}>
        <h2>Gold/Silver Loan Application Form</h2>
        <div className="form-group">
          <label htmlFor="knNumber">KN Number:</label>
          <input type="text" id="knNumber" name="knNumber" value={formData.knNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="goldType">Gold Type (Carat):</label>
          <select name="goldType" value={formData.goldType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="8">8 Carat</option>
                <option value="16">16 Carat</option>
                <option value="24">24 Carat</option>
              </select>
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (in grams):</label>
          <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="placeBoughtFrom">Place Bought From:</label>
          <input type="text" id="placeBoughtFrom" name="placeBoughtFrom" value={formData.placeBoughtFrom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="jewelersNameAddress">Jeweler's Name & Address:</label>
          <input type="text" id="jewelersNameAddress" name="jewelersNameAddress" value={formData.jewelersNameAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo of the Gold Ornament:</label>
          <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="accountHolderName">Account Holder Name:</label>
          <input type="text" id="accountHolderName" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="jointAccount">Joint Account:</label>
          <select id="jointAccount" name="jointAccount" value={formData.jointAccount} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select id="accountType" name="accountType" value={formData.accountType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="ifscCode">IFSC Code:</label>
          <input type="text" id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name:</label>
          <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="branchName">Branch Name:</label>
          <input type="text" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
        )}
    </div>
  );
};



export default Form;