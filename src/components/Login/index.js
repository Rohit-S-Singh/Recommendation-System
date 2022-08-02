import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import { useNotifications } from "reapop";

import { connect } from "react-redux";

import { signUp, login } from "./action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import imgg from "./login.jpg";
import SignUp from "../SignUp";

const PublicHomePage = (props) => {
  const { notify } = useNotifications();

  const { signUp, login, loggedin } = props;
  return (
    <Router basename="/react-auth-ui/">
      <div className="Appp">
        <div className="appAside">
          <img style={{ width: "800px", height: "750px" }} src={imgg} />
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

          <Route
            exact
            path="/"
            render={(props) => <SignUpForm notify={toast} signUp={signUp} />}
          />
          {/* <Route exact path="/" component={SignUpForm} foo={this.props.signUp}/> */}
          <Route
            exact
            path="/sign-in"
            render={(props) => <SignInForm login={login} />}
          />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            theme="colored"
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
};

const Login = (props) => {
  const { notify } = useNotifications();

  const { signUp, login, loggedin } = props;

  return (
    <div>
      {loggedin ? (
        <Redirect to="/" />
      ) : (
        <PublicHomePage signUp={signUp} login={login} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user, notify) => {
      dispatch(signUp(user, notify));
    },
    login: (username, password) => {
      dispatch(login(username, password));
    },
  };
};

function mapStateToProps(state) {
  return {
    user: state.UserReducer.Recommendations,
    givenRatings: state.UserReducer,
    loggedin: state.authReducer.authenticated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
