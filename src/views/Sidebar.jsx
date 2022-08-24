import React from "react"
import { connect } from "react-redux";
import {Link} from "react-router-dom"

import "./Sidebar.css"
import { FaEnvelope,FaSignOutAlt,FaPlusCircle, FaSearch} from "react-icons/fa";
import { logoutUser } from "../store/actions/user";
function Sidebar({setModalOfAddArtOpen, userPhoto, logoutUser}){
       
  return(
    
    <header className="sidebar-content">
          
      <nav className="sidebar-nav">
        
        <div className="user-photo desktop"style={{backgroundImage:`url(${userPhoto})`}}></div>
        
        <FaSearch className="sidebar-icon"></FaSearch>
       
        
        <FaEnvelope className="sidebar-icon"></FaEnvelope>
        
         
         <FaPlusCircle className="sidebar-icon"onClick={()=>setModalOfAddArtOpen(true)}></FaPlusCircle>
        
        <Link className="sidebar-icons-link mobile" to="/login">
        <FaSignOutAlt className="sidebar-icon " onClick={logoutUser}></FaSignOutAlt>
        </Link>
      </nav>
        <Link className="sidebar-icons-link desktop" to="/login">
        <FaSignOutAlt className="sidebar-icon" onClick={logoutUser}></FaSignOutAlt>
        </Link>
    </header>
  
  )
}

const mapStateToProps=(state)=>{
  return ({
  userPhoto:state.userReducer.userPhoto
  })
}
const mapDispatchToProps=(dispatch)=>{
return {
logoutUser:()=>{
   const action= logoutUser()
   dispatch(action);
},
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)