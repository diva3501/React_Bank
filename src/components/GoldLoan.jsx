import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../Config/Firebase';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import "./KYCRegistration.css"

function GoldLoan() {
  const [formData, setFormData] = useState({
    fullName: '',
    knnumber: '',
    goldtype: '',
    weight: '',
    placebought: '',
    jeweler: '',
    accountholdername: '',
    accountType: '',
    accountNumber: '',
    ifscNumber: '',
    bankName: '',
    branchName: '',
  });

  const [showStatusPopup, setShowStatusPopup] = useState(false);

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
      const docRef = await addDoc(collection(firestore, 'goldLoanApplications'), formData); // Adjust collection name
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

  const handleStatusClick = () => {
    setShowStatusPopup(true);
    setTimeout(() => {
      setShowStatusPopup(false);
    }, 5000); 
  };

  const handleAcceptReject = () => {
    const weight = parseFloat(formData.weight); 
    if (!isNaN(weight) && weight > 5) {
      toast.success('Gold Loan Accepted', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      toast.error('Gold Loan Rejected', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
    setShowStatusPopup(false);
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
            <label htmlFor="knnumber" className="form-label">KN Number</label>
            <input type="text" className="form-control" id="knnumber" name="knnumber" value={formData.knnumber} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="goldtype" className="form-label">Gold Type– 8/16/24 Carat</label> 
            <input type="text" className="form-control" id="goldtype" name="goldtype" value={formData.goldtype} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (in gms)</label>
            <input type="text" className="form-control" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="placebought" className="form-label">Place Bought</label>
            <input type="text" className="form-control" id="placebought" name="placebought" value={formData.placebought} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="jeweler" className="form-label">Jewelers Name & Address</label>
            <input type="text" className="form-control" id="jeweler" name="jeweler" value={formData.jeweler} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="accountholdername" className="form-label">Account holder name</label>
            <input type="text" className="form-control" id="accountholdername" name="accountholdername" value={formData.accountholdername} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="accountType" className="form-label">Account Type</label>
            <input type="text" className="form-control" id="accountType" name="accountType" value={formData.accountType} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">Account Number</label>
            <input type="text" className="form-control" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="ifscNumber" className="form-label">IFSC Number</label>
            <input type="text" className="form-control" id="ifscNumber" name="ifscNumber" value={formData.ifscNumber} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="bankName" className="form-label">Bank Name</label>
            <input type="text" className="form-control" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="branchName" className="form-label">Branch Name</label>
            <input type="text" className="form-control" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} />
          </div>
        </form>
        <div className="submit-container">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          <button type="button" className="btn btn-primary" onClick={handleStatusClick}>Status</button>
        </div>
        {showStatusPopup && (
          <div className="status-popup">
            <p>Hello {formData.fullName}, you have provided {formData.weight} weight of gold</p>
            {parseFloat(formData.weight) > 5 ? (
              <button type="button" className="btn btn-success" onClick={handleAcceptReject}>Accept</button>
            ) : (
              <button type="button" className="btn btn-danger" onClick={handleAcceptReject}>Reject</button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default GoldLoan;
