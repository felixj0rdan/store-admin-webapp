import React, { useEffect, useState } from 'react'
import { Header, InvoiceCard, Modal } from '../../components'
// import { changePaymentStatus } from '../../components/helper'
import { useNavigate } from "react-router-dom";
import { changePaymentStatus, getPendingBills } from '../helper'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState([])
  const [filter, setFilter] = useState("regno")
  const [filterVal, setFilterVal] = useState('')
  const [status, setStatus] = useState("all")
  const [invNo, setInvNo] = useState(null)
  const [invoice, setInvoice] = useState(null)
  const [reload, setReload] = useState(false)



  useEffect(() => {
    // loadData()
    // console.log("loaded");
    let access_token = localStorage.getItem('access_token')
    if(!access_token){
      navigate('/')
      return
    }
    getPendingBills(access_token)
    .then((response) => {return response.json()})
    .then((data) => setInvoices(data.invoices))
  }, [reload])

  const onClickYes = (inv) => {
    // console.log(inv);
    let access_token = localStorage.getItem('access_token')
    changePaymentStatus(inv.invoiceNo, access_token)
    .then((response) => {return response.json()})
    .then((data) => {console.log(data); setReload(!reload)})
    // setRef(!ref)
    
  }

  const logData = (data) =>{
    console.log(data);
  }

  return (
    <>
    <Header  />
    <div className='dash-main'>
      {/* modal */}
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Change payment status</h5>
            </div>
            <div className="modal-body" style={{ display: "flex", gap: "0px", flexDirection: "column" }} >
              <p>If the cutomer has paid this bill click yes or click no to close the popup.</p>
              <p>Invoice No: {invoice?.invoiceNo}</p>
              <p>Name: {invoice?.userName}</p>
              <p>Amount: {invoice?.totalPrice}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
              <button onClick={() => onClickYes(invoice)} type="button" className="btn btn-success" data-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
          <div style={{ display: "flex", border: "grey solid 1px", padding: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }} >
            <div style={{width: "200px", marginRight: "50px", border: "grey 1px solid", borderRadius: "3px"}} className="input-group mb-3">
              <div className="input-group-prepend">
                <label style={{border: "0px"}} className="input-group-text">Status</label>
              </div>
              <select onChange={(event) => setStatus(event.target.value)} style={{border: "0px"}} defaultValue={"all"} className="custom-select" >
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
            <div style={{ width: "300px", border: "grey solid 1px", borderRadius: "3px" }} className="input-group mb-3" >
              <div className="input-group-prepend" >
                <select onChange={(event) => setFilter(event.target.value)} id='filter' defaultValue={'regno'} className="custom-select dash-select" >
                  <option style={{backgroundColor: "white", color: "black"}} value="regno">Reg No</option>
                  <option style={{backgroundColor: "white", color: "black"}} value="name">Name</option>
                  <option style={{backgroundColor: "white", color: "black"}} value="phoneno">Phone No</option>
                </select>
              </div>
              <input style={{border: "0px"}} type="text" onChange={(event) => setFilterVal(event.target.value)} className="form-control dash-search"   />
            </div>
          </div>
          {invoices
          .filter(item => {
            if (filterVal === '') {
              if(status === 'all')
                return item
              else if(status === 'paid' && item.paid === true)
                return item
              else if(status === 'unpaid' && item.paid === false)
                return item
            }
            
            else if(filter === 'regno'){
              if(status === 'all')
                return item.userRegno.startsWith(filterVal)
              else if(status === 'paid' && item.paid === true)
                return item.userRegno.startsWith(filterVal)
              else if(status === 'unpaid' && item.paid === false)
                return item.userRegno.startsWith(filterVal)              
            } 
            
            else if (filter === 'name') {
              if(status === 'all')
                return item.userName.startsWith(filterVal)
              else if(status === 'paid' && item.paid === true)
                return item.userName.startsWith(filterVal)
              else if(status === 'unpaid' && item.paid === false)
                return item.userName.startsWith(filterVal) 
            } 
            
            else if (filter === "phoneno") {
              if(status === 'all')
                return item.phonenumber.startsWith(filterVal)
              else if(status === 'paid' && item.paid === true)
                return item.phonenumber.startsWith(filterVal)
              else if(status === 'unpaid' && item.paid === false)
                return item.phonenumber.startsWith(filterVal) 
            }     
          } )
          .map((invoice) => {return <InvoiceCard setInvNo={setInvoice} logData2={logData} key={invoice?.id} invoice={invoice} />} )}
    </div>
    </>
  )
}

export default Dashboard