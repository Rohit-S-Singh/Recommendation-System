/*
 *
 * Signup actions
 *
 */

// import { success } from 'react-notification-system-redux';
import axios from 'axios';
// import { useHistory } from 'react-router';
import {useNotifications} from 'reapop'

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_SUBMITTING,
  SUBSCRIBE_CHANGE,
  SET_SIGNUP_FORM_ERRORS
} from './contants';

import { setAuth } from '../Authentication/actions';
// import setToken from '../../utils/token';
// import handleError from '../../utils/error';
// import { allFieldsValidation } from '../../utils/validation';

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData
  };
};

export const subscribeChange = () => {
  return {
    type: SUBSCRIBE_CHANGE
  };
};

export const signUp = (user,notify) => {
  return async (dispatch, getState) => {
    try {

      cons
      const response = await axios.post("http://localhost:8000"+'/api/auth/register',user);

          notify.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });

      const successfulOptions = {
        title: `You have signed up successfully! You will be receiving an email as well. Thank you!`,
        position: 'tr',
        autoDismiss: 5
      };

    //   dispatch(success(successfulOptions));


    //   localStorage.setItem('email',response.data.email);
    //   localStorage.setItem('name',response.data.name);
    
    //   history.push("/verify");

    }catch (error) {
      const title = `Please try to signup again!`;

      notify.error(error.response.data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
              });

    //   console.log("errrorr    ",error.response.data.error);
    //   handleError(error, dispatch, title);
    } finally {
    //   dispatch({ type: SET_SIGNUP_SUBMITTING, payload: false });
    //   dispatch({ type: SET_SIGNUP_LOADING, payload: false });
    }
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    const successfulOptions = {
      title: `You have signed out!`,
      position: 'tr',
      autoDismiss: 5
    };

    // dispatch(clearAuth());
    dispatch(clearAccount());
    dispatch(push('/login'));

    localStorage.removeItem('token');

    dispatch(success(successfulOptions));
    // dispatch(clearCart());
  };
};



export const login = (email,password) => {
  return async (dispatch, getState) => {

    // const rules = {
    //   email: 'required|email',
    //   password: 'required|min:6'
    // };

    // const user = getState().login.loginFormData;

    // const { isValid, errors } = allFieldsValidation(user, rules, {
    //   'required.email': 'Email is required.',
    //   'email.email': 'Email format is invalid.',
    //   'required.password': 'Password is required.',
    //   'min.password': 'Password must be at least 6 characters.'
    // });

    // if (!isValid) {
    //   return dispatch({ type: SET_LOGIN_FORM_ERRORS, payload: errors });
    // }

    // dispatch({ type: SET_LOGIN_SUBMITTING, payload: true });
    // dispatch({ type: SET_LOGIN_LOADING, payload: true });

    var user = {
      "email":email,
     "password":password
    }

    try {
      const response = await axios.post("http://localhost:8000"+'/api/auth/login', user);


      console.log(response.data);

      // const firstName = response.data.user.firstName;

      // const successfulOptions = {
      //   title: `Hey${firstName ? ` ${firstName}` : ''}, Welcome Back!`,
      //   position: 'tr',
      //   autoDismiss: 5
      // };

      // localStorage.setItem('token', response.data.token);

      // setToken(response.data.token);

      dispatch(setAuth());

      // dispatch(success(successfulOptions));

      // dispatch({ type: LOGIN_RESET });
    } catch (error) {
      const title = `Please try to login again!`;
      // handleError(error, dispatch, title);
    } finally {
      // dispatch({ type: SET_LOGIN_SUBMITTING, payload: false });
      // dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};

