import React, { useEffect, useState } from 'react'
// import { changePaymentStatus } from '../helper'
import ItemCard from '../ItemCard/ItemCard'
// import Popup from '../Popup/Popup'
import './InvoiceCard.css'


function InvoiceCard({invoice, logData2, setInvNo}) {
  const [viewItems, setViewItems] = useState(false)
  const [popup, setPopup] = useState(false)
  // console.log(invoice);

  const onClickYes = (InvNo) => {
    console.log(InvNo);
    // changePaymentStatus(invoice.invoiceNo)
    // .then((response) => {return response.json()})
    // .then((data) => console.log(data))
  }

  const onInitiateStatus = () => {
    
  }
  
  useEffect(() => {
    
    // console.log(invoice.invoiceNo);
    // setInvNo(invoice.invoiceNo)

   
  
    
  }, [])
  

  return (
    <div style={{borderBottom:"#001F2D solid 1px", width: '80%', marginLeft: '10%'}} >
      
      {/* {popup? <Popup />:null} */}
    <div className='card-main'>

      <div style={{padding: '10px', display: "flex", flexDirection: "row", width: "50%", justifyContent: "space-between"}} >
        <div>
          <p style={{height: "10px"}} >Invoice no: {invoice.invoiceNo}</p>
          <p>Phonenumber: {invoice.phonenumber}</p>
        </div>
        
        <div style={{}} >
          <p style={{height: "10px", paddingRight: "20px"}} >Name: {invoice.userName}</p>
          <p style={{height: "10px"}} >Reg no: {invoice.userRegno}</p>
        </div>
        <div>
          <p style={{height: "10px"}} >Total amount: {invoice.totalPrice}</p>
          <p>Date: {invoice.datetime.split(" ")[0]}</p>
        </div>
      </div>
      <div style={{ display:"flex", marginTop: "15px", height: "45px" , justifyContent: "space-evenly", width: "25%" }} >
        <button onClick={() => setViewItems(!viewItems)} type="button" className="btn btn-outline-dark">View Items</button>
        {invoice.paid ? 
        <button type="button" disabled="True" style={{backgroundColor: "green"}} className="btn btn-success">Paid</button>:
        <button onClick={() =>  setInvNo(invoice)} className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Not Paid</button>  }

      </div>
    </div>
      {viewItems ? <ItemCard items={invoice.items} grand={invoice.totalPrice} count={invoice.totalCount} />: null}
          
    </div>
  )
}

export default InvoiceCard