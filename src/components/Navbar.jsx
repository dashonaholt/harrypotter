import React from "react"
import Logo from "../assets/HarryPotterLogo.png"
import {Link} from 'react-router-dom'



export default function Navbar(){
    
    return(
        <div className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-link">
          Home
          </Link>
          <Link to="/houselist" className="nav-link" >
          HouseList
          </Link>
          <Link to="/topstudents" className="nav-link">
          TopStudents
          </Link>
          <Link to="/staff" className="nav-link">
          Staff
          </Link>
        </div>
        </div>
    )
}

