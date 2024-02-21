import React from "react";
import {Link} from "react-router-dom"; 
// import logo from "../images/library book logo.png";
import "../App.css"
function Header(){
  return(
    <div>
      <div className = "header">
        <div className = "header-logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className = "header-mid">
          <h3>Library Book Management</h3>
        </div>
        {/* <div className="header-links">
          <div className = "left-link"><Link to='/user'>User</Link></div>
          <div className = "left-link"><Link to='/admin'>Admin</Link></div>
        </div> */}
      </div>
      <hr />
    </div>
    
  )
}
export default Header;