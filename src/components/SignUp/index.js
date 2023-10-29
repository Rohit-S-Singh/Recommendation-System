import React from 'react';
import { useHistory } from "react-router-dom"


import './signup.css'
import login from '../../images/email.png'
import google from '../../images/logingoogle.png'
import facebook from '../../images/loginfacebook.png'
import { Divider } from '@mui/material';
import Footer from '../footer'
const SignUp = (props) => {
  const history = useHistory()
  const clickHandler = () => {
    history.push('/login')
  }

  return (
    <div className="signup">
      <p className="loginbtn" onClick={() => clickHandler()}>Sign In</p>
      <from className="signupform">
        <img className="signuplogo" src={login} width={60} height={60} />
        <p>Let's get you set <br></br> up!</p>
        <p className='sub'>It's free. No subscription required</p>
        <div className="google">
          <p className="signupfield" >Continue with Google</p>
          <img className="signupgoogle" src={google} width={19} height={19} />
        </div>
        <div className="facebook">
          <p className="signupfieldfb" >Continue with Facebook</p>
          <img className="signupfacebook" src={facebook} width={23} height={23} />
        </div>
        <div className="line"> <hr></hr></div>
        <div className="or">Or</div>
        <div className="sign"><p>Register via Email</p></div>
        <div className="email">
          <div><input type='text' placeholder="First Name" /></div>
          <input type='email' placeholder="Email" />
          <div><input type="password" id="password" name="password" placeholder="Password" /><br /></div>
        </div>
        <div className='birth'>
          <p>Birthaday</p>
          <div className='mdy'>
            <input type='text' placeholder='Month' />
            <input type='text' placeholder='Day' />
            <input type='text' placeholder='Year' />
          </div>

        </div>
        {/* <div>
            <select name="gender" className="box">
               <option value=""  selected>Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
            </select>
              </div> */}

        <select className='box' >

          <option selected value="gender">Gender</option> <Divider />
          <option value="male">Male</option><hr></hr>
          <option value="female">Female</option><hr></hr>
          <option value="other">Other</option><hr></hr>
        </select>



        <div className="signinbtn">
          <button>Register</button>
        </div>
        <div className="term1">
          <p>By registering, you agree to Tubi's </p>

        </div>
        <div className="col1">
          <p>Terms of Use &nbsp;<span>and</span> &nbsp; Privacy Policy</p>
        </div>

        <div className="acc1">
          <p className="acc1">Already have an account? <span className="loginbtn" onClick={() => clickHandler()}>Sign In</span></p>
        </div>


      </from>
      <Footer />
    </div>
  );
}

export default SignUp;