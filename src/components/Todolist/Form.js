import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";



const Form = (props) => {
    const [name, setName] = useState("");
    const [date, setDates] = useState();

    const handleAddItem = (e) => {
        e.preventDefault()
      if (name && date) {
        const newItem = {
            id: uuidv4(),
            name: name,
            isDeleted: false,
            date: date
        };
        props.handleChangeList(newItem);
        setName("");
      }
    };
    
    const handleChangeItem = (e) => {
      setName(e.target.value);
    };
    
    const get_day_of_time = (d1, d2) => {
      let ms1 = d1.getTime();
      let ms2 = d2.getTime();
      return Math.ceil((ms2 - ms1) / (24*60*60*1000));
    };

    const handleUpdateTime = (e) => {
      // setDates(e.target.value)
      let dayFinish = new Date(e.target.value);
          let today = new Date();
          // console.log(get_day_of_time(today,dayFinish));
          setDates(get_day_of_time(today,dayFinish));
    }

    return (
      <form className="form">
        <input 
        placeholder="Enter task ..." 
        onChange={handleChangeItem}
        value={name}
        />
        <button onClick={handleAddItem}>Submit</button>
        <input type="date"
        onChange={handleUpdateTime}
        />
      </form>
    );
  };
  
  export default Form;
  