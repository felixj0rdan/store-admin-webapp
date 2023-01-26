import React from 'react'

function ItemCard({items, grand, count}) {
    console.log(items);
  return (
    <div style={{ padding:"10px" ,border: "gray dashed 1px", margin: "10px", borderRadius: "7px" }} >
        <div style={{ display: "flex", fontSize: "20px", borderBottom: "gray solid 1px" }} >
            <p style={{width: "35%", textAlign: "center"}} >Name</p>
            <p style={{width: "25%", textAlign: "center"}} >Price</p>
            <p style={{width: "15%", textAlign: "center"}} >Quantity</p>
            <p style={{width: "25%", textAlign: "center"}} >Amount</p>
        </div> 
        {items.map((item) => { return(
            <div style={{ display: "flex" }} >
                <p style={{width: "35%", textAlign: "center"}} >{item.productName}</p>
                <p style={{width: "25%", textAlign: "center"}} >{item.price}</p>
                <p style={{width: "15%", textAlign: "center"}} >{item.count}</p>
                <p style={{width: "25%", textAlign: "center"}} >{item.totalPrice}</p>
            </div>
        ) })}
        <div style={{ display: "flex", justifyContent: "space-around", fontSize: "20px", borderTop: "gray solid 1px" }} >
            <p style={{ textAlign: "center"}} >Total No of items: {count}</p>
            <p style={{ textAlign: "center"}} >Total Amount: {grand}</p>
        </div>

    </div>
  )
}

export default ItemCard