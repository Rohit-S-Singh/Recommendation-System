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

// import { setAuth } from '../Authentication/actions';
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
    //   const rules = {
    //     email: 'required|email',
    //     password: 'required|min:6',
    //     firstName: 'required',
    //     lastName: 'required'
    //   };

    // console.log("fvfdvdfvfdvdfvdfvdfv",notify);
    // console.log("notifffy",user);


    //   const newUser = getState().signup.signupFormData;
    //   const isSubscribed = getState().signup.isSubscribed;

      

    //   const { isValid, errors } = allFieldsValidation(newUser, rules, {
    //     'required.email': 'Email is required.',
    //     'required.password': 'Password is required.',
    //     'required.firstName': 'First Name is required.',
    //     'required.lastName': 'Last Name is required.'
    //   });

    //   if (!isValid) {
    //     return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
    //   }

    //   dispatch({type: SET_SIGNUP_SUBMITTING, payload: true});
    //   dispatch({type: SET_SIGNUP_LOADING, payload: true});

    //   const user = {
    //     ...newUser
    //   };

      console.log("userrrrrr",user);


      const response = await axios.post("http://localhost:8000"+'/api/auth/register',user);



    //   notify(response.data.message);
      notify.success(response.data.message, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});


      console.log(response);

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
