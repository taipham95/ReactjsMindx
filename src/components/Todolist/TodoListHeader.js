import React, { useState } from "react";


const Header = (props) => {
    return <div className="header">You have {props.handleChangeNumberTask} tasks left!</div>;
  };
  
  export default Header;