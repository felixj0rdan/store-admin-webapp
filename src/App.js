// import './App.css';
// import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import { Header } from './components';
import { useNavigate } from "react-router-dom";

import { Dashboard, Home, Login } from "./pages";


function App() {
  // const navigate = useNavigate();
  


  return (
    // <Home/>
    <div >
    
      <Router>
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
