import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../Config/Firebase';
import Navbar from './Header/Navbar';
import "./KYCRegistration.css"
import Footer from './Footer/Footer';

function KYCRegistration() {
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
      toast.success('KYC Registration Successful!', {
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
      toast.error('Error registering KYC!', {
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
     
      <h2>KYC Registration</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="aadharNumber" className="form-label">Aadhar Number</label>
          <input type="text" className="form-control" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="panNumber" className="form-label">PAN Number</label>
          <input type="text" className="form-control" id="panNumber" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="passportNumber" className="form-label">Passport Number</label>
          <input type="text" className="form-control" id="passportNumber" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="drivingLicenseNumber" className="form-label">Driving License Number</label>
          <input type="text" className="form-control" id="drivingLicenseNumber" name="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={handleChange} />
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

export default KYCRegistration;