import { Card } from "react-bootstrap";
import LeftNavigation from "../CommonComponents/LeftNavigation";
import "../Styles/Dashboard.css"
import Navbar from "../CommonComponents/Navbar";
import attendance from "../../Images/Attendance.png"
import activeProject from "../../Images/Projects.png"
import completedProject from "../../Images/ActiveProject.png"
import CircularProgress from "../CommonComponents/CircularProgress";

const Dashboard=()=>{
    return (
        <div className="">
        <Navbar/>
        <div className="dashboardContainer">
            <div className="leftNavigation">
                <LeftNavigation/>
            </div>
            <div className="dashboardContentArea ">
              
              <div className="profileProgressSection row">
              <div className="col-md-3 ps-lg-0 " >
                  <div className="comon-overview  card  mb-4 mb-lg-0">
                     <div className="cardContainer">
                        <div className="date-tx d-flex  align-items-center">                        
                              <img src={attendance} alt="icon"/>
                           <h5 className="ms-2">
                           Total Courses
                           </h5>	         
                        </div>    
                        <div className="progressDetails">
                        <p className="progressBy">90/100 <span className="dayDescribe">Today</span></p>
                        <CircularProgress bgcolor="#4CAF50" percentage={90} />
                        </div>
                     </div>
                     <div className="cinfo">
                   
                     <p>1.3% from past week</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="comon-overview card md-overview  mb-4 mb-lg-0">
                     <div className="cardContainer">
                        <div className="date-tx d-flex align-items-center">
                           <figure className="icon-f mb-0">
                              <img src={activeProject} alt="icon"/>
                           </figure>
                           <h5 className="ms-2">
                              Active Courses
                           </h5>
                        </div>
                       < div className="progressDetails">
                        <p className="progressBy">90/100 <span className="dayDescribe">Today</span></p>
                        <CircularProgress bgcolor="#4CAF50" percentage={90} />
                        </div>
                     </div>
                     <div className="cinfo">
                   
                     <p>1.3% from past week</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="comon-overview card lst-overview  mb-4 mb-lg-0">
                     <div className="cardContainer">
                        <div className="date-tx d-flex align-items-center">
                           <figure className="icon-f mb-0">
                              <img src={completedProject} alt="icon"/>
                           </figure>
                           <h5 className="ms-2">
                              Active Students
                           </h5>
                        </div>
                        <div className="progressDetails">
                        <p className="progressBy">90/100 <span className="dayDescribe">Today</span></p>
                        <CircularProgress bgcolor="#4CAF50" percentage={90} />
                        </div>
                     </div>
                     <div className="cinfo">
                   
                     <p>1.3% from past week</p>
                     </div>
                     
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="comon-overview card lst-overview  mb-4 mb-lg-0">
                     <div className="cardContainer">
                        <div className="date-tx d-flex align-items-center">
                           <figure className="icon-f mb-0">
                              <img src={activeProject} alt="icon"/>
                           </figure>
                           <h5 className="ms-2">
                              Total Connect Partners
                           </h5>
                        </div>
                        <div className="progressDetails">
                        <p className="progressBy">90/100 <span className="dayDescribe">Today</span></p>
                        <CircularProgress bgcolor="#4CAF50" percentage={90} />
                        </div>
                     </div>
                     <div className="cinfo">
                   
                     <p>1.3% from past week</p>
                     </div>
                  </div>
               </div>

              </div>

            </div>

        </div>

        </div>
    )
}

export default Dashboard;