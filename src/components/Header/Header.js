import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { assets } from '../../constants'

function Header() {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('access_token'))
      setLogin(true)
    else
      setLogin(false)
    
  }, [])

  const onLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('admin_id') 
    navigate("/")
    // window.location.reload(false)
  }

  
  

  return (
    <div className='header-main' >
      <div style={{ display: "flex"}} > 
        <img style={{ marginTop: "20px" }} src={assets.menu} width="30px" height="30px" ></img>
        <p className='header-title'>Stores</p>
      </div>
      <div>
      </div>
      <div style={{ marginRight: "20px" }} >
      
        {login? <button onClick={onLogout} type="button" className="btn btn-light">Logout</button> : <Link  to='/login'  className="btn btn-light">Login</Link> }
      </div>
    </div>
  )
}

export default Header