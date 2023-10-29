import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import './login.css'
import login from '../../images/login.jpeg'
import google from '../../images/logingoogle.png'
import facebook from '../../images/loginfacebook.png'
import Footer from '../footer'
const Login = () => {
  const history = useHistory()
  const click = () => {
    history.push('./SignUp')
  }


  return (
    <>
      <div className="login">
        <p className="s" onClick={() => click()}>Register</p>
        <from className="loginform">
          <img className="loginlogo" src={login} width={60} height={60} />
          <p>Welcome Back!</p>
          <div className="google">
            <p className="loginfield" >Continue with Google</p>
            <img className="logingoogle" src={google} width={19} height={19} />
          </div>
          <div className="facebook">
            <p className="loginfieldfb" >Continue with Facebook</p>
            <img className="loginfacebook" src={facebook} width={23} height={23} />
          </div>
          <div className="line"> <hr></hr></div>
          <div className="or">Or</div>
          <div className="sign"><p>Sign In via Email</p></div>
          <div className="email">
            <input type='email' placeholder="Email" />
            <div><input type="password" id="password" name="password" placeholder="Password" /><br /></div>

          </div>
          <div className="signinbtn">
            <button>Sign In</button>
          </div>
          <div className="forget">
            <p>Forget Password</p>

          </div>
          <div className="acc">
            <p className="acc">Don't have an account? <span onClick={() => click()}>Register</span></p>
          </div>
          <div className="term">
            <p>By registering, you agree to Tubi's </p>

          </div>
          <div className="col">
            <p>Terms of Use &nbsp;<span>and</span> &nbsp; Privacy Policy</p>
          </div>
        </from>

      </div>
      <Footer />

    </>
  )
}
export default Login
