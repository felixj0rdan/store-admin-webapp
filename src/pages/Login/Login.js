import React, { useState } from 'react'
import { adminLogin } from '../helper'
import  { Redirect } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Header } from '../../components';

function Login() {
    const navigate = useNavigate();
    const [phonenumber, setPhonenumber] = useState(0)
    const [password, setPassword] = useState("")

    const onLogin = (event) => {
        event.preventDefault()
        let data = {
            "phonenumber": phonenumber,
            "password": password,
        }
        adminLogin({ "phonenumber": phonenumber,"password": password })
        .then((response) => {return response.json()})
        .then((data) => {
            if(data.message)
            {
                alert(data.message)
                return
            }
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
            localStorage.setItem("admin_id", data.admin_id)
            // return <Redirect to='/dashboard'  />
            // props.history.forward("/dashboard")
            navigate('/dashboard')

        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <Header  />
        <div style={{  display: "flex", marginTop: "10%", justifyContent: "center"}}>

        <div className='card' style={{width: "30%", padding: "20px", border: "#001F2D solid 1px"}}  >
            <form>
                <div className="form-group">
                    <label >Phonenumber</label>
                    <input onChange={(event) => setPhonenumber(event.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control"/>
                </div>
                <button onClick={(event) => onLogin(event)} style={{background: "#001F2D", color: "white"}}  className="btn ">Login</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Login