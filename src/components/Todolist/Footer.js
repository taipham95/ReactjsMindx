import React, { useState, useEffect, useContext } from "react";
import { TranslateContext } from "./TranslateContext";

const Footer = (props) => {
  const TranslateLang = useContext(TranslateContext)

  const [booleanLang, setBooleanLang] = useState({
    vn: "",
    us: ""
  })
  const handleClickLang = (e) => {
    if ([e.target.name] == "vn") {
      setBooleanLang({...booleanLang, vn: "true", us: "false"})
    }
  }
  
  console.log(booleanLang);
    return (
      <div>
        <h3>Made by MindX π₯</h3>
        <div>
          <span>Available on:</span>
          <span className={`languague-picker`} onClick={handleClickLang} name="vn">π»π³</span>
          <span className={`languague-picker`} onClick={handleClickLang} name="us">πΊπΈ</span>
        </div>
      </div>
    );
  };

  
  export default Footer;
  