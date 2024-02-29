import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from 'Config/Firebase';
import { AuthenticatedContext } from 'Context/AuthenticatedContext';
import { Rings } from "react-loader-spinner";
import Footer from 'components/Footer/Footer';

function Dashboard() {
  const { user } = useContext(AuthenticatedContext)
  const [totalAccounts, setTotalAccounts] = useState(0)
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalDebit, setTotalDebit] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const readDocs = async () => {
    let arrayAccounts = []
    let arrayTransactions = []


    const accountsRef = collection(firestore, "accounts");
    const qa = query(accountsRef, where("createdBy.uid", "==", user.uid));
    const querySnapshotaccounts = await getDocs(qa);


    const transactionsRef = collection(firestore, "transactions");
    const qt = query(transactionsRef, where("createdBy.uid", "==", user.uid));
    const querySnapshottransactions = await getDocs(qt);

    querySnapshotaccounts.forEach((doc) => {
      arrayAccounts.push(doc.data())
    });

    let credit = 0;
    let debit = 0;
    querySnapshottransactions.forEach((doc) => {
      arrayTransactions.push(doc.data())
      if (doc.data().type === "credit") {
        credit = credit + parseInt(doc.data().amount)
      } else {
        debit = debit + parseInt(doc.data().amount)
      }
    });
    setTotalCredit(credit)
    setTotalDebit(debit)

    setTotalAccounts(arrayAccounts.length)
    setTotalTransactions(arrayTransactions.length)
    setIsLoading(false)
  }

  useEffect(() => {
    readDocs()
  }, [])

  return (
    <>
    <div className='dashboardPage'>
      <div className='container py-5'>
        <div className="row">
          <div className="col-12 col-lg-6 mt-2">
            <div className="card pb-4">
              <div className="card-body text-center">
                <h5 className="card-title"><i className="fa-solid fa-user"></i> Accounts</h5>
                <hr />
                <Link to="/dashboard/createAccounts" className='btn btn-success mt-2 me-2 mb-0 h5' ><i className="fa-solid fa-plus"></i> Add New Account</Link>
                <Link to="/dashboard/viewAccounts" className='btn btn-info mt-2 me-2 mb-0 h5 text-white'><i className="fa-solid fa-eye"></i> View All Accounts</Link>
                <hr />
                {isLoading
                  ? <div className="row">
                      <div className="col d-flex justify-content-center ">
                        <Rings />
                      </div>
                    </div>
                  : <div className='my-4'>
                      {totalAccounts}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-2">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title "><i className="fa-solid fa-money-bill-1"></i> Transactions</h5>
                <hr />
                <Link to="/dashboard/viewTransactions" className='btn btn-info mt-2 me-2 h5 text-white'><i className="fa-solid fa-eye"></i> View All Transactions</Link>
                <hr />
                {isLoading
                  ? <div className="row">
                      <div className="col d-flex justify-content-center ">
                        <Rings className="w-50"/>
                      </div>
                    </div>
                  : <div className='my-4'>
                      {totalTransactions}
                      <div className="container-fluid">
                        <div className="row ">
                          <div className="col text-start mb-0" ><p className='TC' style={{ fontSize: '17px',color:'white',backgroundColor:'#404040'}}>Total Credits Rs: <span className='text-success' style={{color:'#33ff33'}}> { totalCredit}</span></p></div>
                          <div className="col text-end mb-0"><p className='TD' style={{ fontSize: '17px' ,color:'white',backgroundColor:'#404040'}}>Total Debits Rs: <span className='text-danger'> { totalDebit}</span></p></div>
                        </div>
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
       
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">KYC Registration</h3>
                <h6 className="card-text">Complete your KYC registration process to avail additional services.</h6>
                <Link to="/KYCRegistration" className="btn btn-primary">Start KYC Registration</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Gold Loan</h3>
                <h6 className="card-text">Complete your Gold Loan process to avail additional services.</h6>
                <Link to="/Goldloan" className="btn btn-primary">Complete Gold Loan Process</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Dashboard;
