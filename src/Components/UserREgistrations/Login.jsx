import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoBodyImg from "../../Images/mapmyvisa_home.jpg";
import google from "../../Images/googleLogo.png"
import microsoft from "../../Images/microsoftLogo.png"
import "../Styles/UserRegistration.css";
import Button from 'react-bootstrap/Button';
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginContent row">
        <div className="loginFormContainer col-md-6">

         <div className="formContainer">
           <div className="loginHeaderText">
           <h2>World Space Academy</h2>
           x
           </div>
            <div className="inputContainer">
            <input type="text" class="form-control inputFeilds" placeholder="Email Id or Phone Number" />
            <input type="password" class="form-control inputFeilds" placeholder="Password" />
            <div className="recoverPasswordOptions">
                <p>Remember Me</p>
                <p>Forget Password ? </p>
            </div>
            <Button className="LoginButton">Log In <i class="bi bi-arrow-right"></i></Button>
            <p className="termsPolicy">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <div className="otherSignInContainer">
                <p className="signInWith"> Or Sign in with </p>
                <div className="oauthSeviveOptions">
                 <img className="outhLogo" src={microsoft} alt=" microsoft"/>
                 <img className="outhLogo"src={google} alt="google"/>
                </div>

            </div>
            </div>
         </div>

        </div>
        <div className="imageContainer col-md-6">
          <img  className="loginImage w-75" src={logoBodyImg} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
