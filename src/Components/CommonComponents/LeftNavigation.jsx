import { NavLink } from "react-router-dom";
import icon1 from "../../Images/dashboard.png";
import icon2 from "../../Images/course.png";
import icon3 from "../../Images/note-done.png";
import icon4 from "../../Images/event.png";
import icon5 from "../../Images/meeting.png";
import icon6 from "../../Images/message.png";
import icon7 from "../../Images/addusers.png";
import icon8 from "../../Images/outreach.png";
import icon9 from "../../Images/updates.png";
import icon10 from "../../Images/organizations.png";
import icon11 from "../../Images/user.png";
import icon12 from "../../Images/setting.png";
import "../Styles/LeftNavigation.css"

const LeftNavigation = () => {
  return (
    <div>
      <ul className="list-unstyled navMenu">
        <li className="navItems">
          <NavLink className="navLink" to="/adminlashbord" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon1} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Dashboard </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/lashboardbooking" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon2} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Course </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/lashboardavailbleSlot" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon3} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Projects </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlasboardbookingmain" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon4} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Events </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlashboardtest" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon5} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Meeting </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">

   
          <NavLink className="navLink" to="/adminlashboardlab" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon6} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Message </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlashbordpayments" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon7} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Teams </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink"
            to="/lashboardnotificationpage"
            activeClassName="menu_active"
          >
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon8} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Outreach </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink  className="navLink" to="/adminlashbordsettings" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon9} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Update </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlashboardsupport" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon10} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Organization </span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlashboardsupport" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon11} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Account</span>{" "}
          </NavLink>
          </li>
          <li className="navItems">
          <NavLink className="navLink" to="/adminlashboardsupport" activeClassName="menu_active">
            {" "}
            <span className="menu-icon-new">
              {" "}
              <img src={icon12} alt="icon1" />{" "}
            </span>{" "}
            <span className="menu-text"> Setting </span>{" "}
          </NavLink>
          </li>
       
      </ul>
    </div>
  );
};

export default LeftNavigation;
