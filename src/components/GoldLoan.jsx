import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../Config/Firebase';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import "./KYCRegistration.css"


function GoldLoan() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    aadharNumber: '',
    panNumber: '',
    passportNumber: '',
    drivingLicenseNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'kycRegistrations'), formData);
      console.log('Document written with ID: ', docRef.id);
      toast.success('Gold Loan Form Submitted', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error in submission!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <>
    <Navbar />
    <div className="container1">
     
      <h2>Gold Loan</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">KN Number</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Gold Type– 8/16/24 Carat</label> 
          <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="aadharNumber" className="form-label">Weight (in gms)</label>
          <input type="text" className="form-control" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="aadharNumber" className="form-label">Place Bought</label>
          <input type="text" className="form-control" id="aadharNumber" name="aadharNumber" value={formData.placebought} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="panNumber" className="form-label">Jewelers Name & Address</label>
          <input type="text" className="form-control" id="panNumber" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Account holder name</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.accountholdername} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Account Type</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.accounttype} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Account Number</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.accountnumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">IFSC Number</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.ifscnumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Bank Name</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.bankname} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Branch Name</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.branchname} onChange={handleChange} />
        </div>
        <div className="submit-container">
              <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
    <Footer />
    </>
  );
}

export default GoldLoan;