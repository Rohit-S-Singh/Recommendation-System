import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import {useNotifications} from 'reapop'

import { connect } from "react-redux";

import {signUp} from './action';


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import imgg from "./login.jpg";

const Login = (props)=> {

  const {notify} = useNotifications();
  
  const {signUp} = props;

  console.log("888888888",signUp);

    return (
      <Router basename="/react-auth-ui/">
        <div className="Appp">
          <div className="appAside" >
          <img style={{width:"800px", height:"750px"}} src={imgg}/>
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" render={(props) => <SignUpForm notify = {toast} signUp={signUp} />} />
            {/* <Route exact path="/" component={SignUpForm} foo={this.props.signUp}/> */}
            {/* <Route path="/sign-in" component={SignInForm} /> */}
           <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
      </div>
        </div>
      </Router>
    );
  }

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user,notify) => {
      dispatch(signUp(user,notify))
    }
  };
};

function mapStateToProps(state) {
  return { user: state.UserReducer.Recommendations,
           givenRatings: state.UserReducer 
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
