import logo from "../../Images/logo.png";
import "../Styles/TopNavbar.css";
import notificationBell from "../../Images/notifications.png"
import naavdeep from "../../Images/Navdeep 1.png"
import lightmode from "../../Images/lightmode.png"
import downArrow from "../../Images/downArrow.png"
const Navbar = () => {
  return (
    <div className="topNavbar">
      <div className="LogoContainer">
        <span className="logo">
          <img src={logo} alt="logo"></img>
        </span>
        <p className="logoTitle d-inline">Navdeep</p>
      </div>

      <div className="profileContainer">
        <span>
         <img src={notificationBell}></img>
        </span>
        <span>
         <img src={lightmode}></img>
        </span>
        <span>
         <img src={naavdeep}></img>
         </span>
         <span className="profileName">
        <p>Navdeep Singh </p>
         </span>
         <span className="details" >
        <img src={downArrow} alt="down"/>
         </span>
      </div>
    </div>
  );
};

export default Navbar;
