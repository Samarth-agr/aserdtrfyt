import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const { user ,dispatch} = useContext(Context); 
  const PF="http://localhost:5000/images/"
  const handleLogout=()=>{
     dispatch({type:"LOGOUT"});
  }
  return (

    <div className='top'>
        <div className="topLeft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/Destination">
              DESTINATIONS
              <ul className="subList">
                <li>INDIA</li>
                <li>JAPAN</li>
                <li>SINGAPORE</li>
                <li>MALDIVES</li>
                <li>HONG-KONG</li>
                <li>CHINA</li>
                <li>SPAIN</li>
                <li>TURKEY</li>
              </ul>
                </Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/ideas">
                 IDEAS
                 <ul className="subList">
                <li>Adventure</li>
                <li>Art and Culture</li>
                <li>Festival and Events</li>
                <li>Food and Wine</li>
                <li>Roadtrips</li>
                <li>Winter</li>
                <li>Wildlife and Nature</li>
              </ul>
                 </Link>
                </li>
                <li className="toplistItem">
                <Link className="link" to="/Write">
              WRITE
          </Link> 
                </li>
                {user && <li className="toplistItem" onClick={handleLogout}>LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img className="topimg"src={PF+user.profilePic} alt="" />
              </Link>
          
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
            <Link className="link" to="/login">
              LOGIN
           </Link>         
            </li>
            <li className="toplistItem">
            <Link className="link" to="/Register">
              REGISTER
           </Link>           
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

   </div>
  )
}
