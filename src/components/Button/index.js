import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from "react-router-dom";



 const Buttonu = (props)=> {

   const history = useHistory();

  const click = ()=>{

    history.push(`/login`);
  }  
  return (
      <Button variant="outlined" onClick = {()=>{click()}}>{props.name}</Button>
  );
}

export default Buttonu;
