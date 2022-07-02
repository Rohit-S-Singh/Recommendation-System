import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from "react-router-dom";



 const Buttonu = (props)=> {

   const history = useHistory();

  const click = ()=>{

    if(props.name == "Login")
     history.push(`/login`);
     else
     history.push(`/signUp`);

  }  
  return (
      <Button variant="outlined" onClick = {()=>{click()}}>{props.name}</Button>
  );
}

export default Buttonu;
