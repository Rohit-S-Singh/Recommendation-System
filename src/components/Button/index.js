// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { useState } from "react";
// import { useHistory } from "react-router-dom";



//  const Buttonu = (props)=> {

//    const history = useHistory();

//   const click = ()=>{

//     if(props.name == "Login")
//     history.push('/login')
//      history.push(`/login#/react-auth-ui/`);

//   }  
//   return (
//       <Button variant="outlined" onClick = {()=>{click()}}>{props.name}</Button>
//   );
// }

// export default Buttonu;

import React from "react";

import { useState } from "react";
import './button.css'
import { useHistory } from "react-router-dom"


const Button = () => {
  const history = useHistory()
  const clickHandler = () => {
    history.push('/login')
  }
  const click = () => {
    history.push('./SignUp')
  }

  return (
    <>
      <div className="btncontainer">
        <button className="loginbtn" onClick={() => click()}>SIGNUP</button>
        <button className="loginbtn" onClick={() => clickHandler()}>LOGIN</button>
      </div>

    </>
  )
}
export default Button