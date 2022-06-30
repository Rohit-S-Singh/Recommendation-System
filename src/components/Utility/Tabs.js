import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs(props) {
  const [value, setValue] = React.useState(props.activetab);

  const handleChange = (event, newValue) => {
    if(value === 1){
        // props.func1();
    }
    else{
        // props.func2();
    }
    setValue(newValue);

  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.black" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="New Movies" style={{color:"white"}} />
        &nbsp;
        &nbsp;
        &nbsp;
        <Tab label="Favourites" style={{color:"white"}} />
      </Tabs>
    </Box>
  );
}