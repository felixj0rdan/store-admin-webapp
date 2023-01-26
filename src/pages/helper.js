

const url = "http://127.0.0.1:5000/"
export const getPendingBills = (access_token) => {
    return fetch(url+"invoices",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        }
    }
    )
}

export const adminLogin = (data) => {
    
    return fetch(url+"admin/login",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data)
    }
    )
}

export const changePaymentStatus = (invoiceno, access_token) => {
    return fetch(`${url}change-payment-status/${invoiceno}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
            
        },
        
    }
    )
}