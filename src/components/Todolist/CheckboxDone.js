import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Checkbox = (props) => {
    const [checked, setChecked] = useState(true);

    const handleCheckBox = (e) => {
        setChecked(e.target.checked);
        console.log(checked)
        props.onFilter(checked)
      };
    return (
      <form className="checkbox">
        <input 
        onClick={handleCheckBox}
        type ='checkbox'
        />
        <label>Not finished only</label>
      </form>
    );
  };
  
export default Checkbox;
  