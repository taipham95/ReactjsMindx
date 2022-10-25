import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { TranslateContext } from "./components/Todolist/TranslateContext";
import Footer from "./components/Todolist/Footer";
import Form from "./components/Todolist/Form";
import TodoList from "./components/Todolist/TodoList";
import TodoListHeader from "./components/Todolist/TodoListHeader";
import Checkbox from "./components/Todolist/CheckboxDone";
import "./index.css";
import { v4 as uuidv4 } from "uuid";


export default function App() {
  const TranslateLang = useContext(TranslateContext)
  const storageTask = JSON.parse(localStorage.getItem('todoList')) || [];

  const [todoList, setToDoList] = useState(storageTask)
  const [filterList, setFilterList] = useState([])
  const [boolean, setBoolean] = useState(true)

  const handleChangeList = (item) => {
    setToDoList(prev => {
      const newTask = [...prev, item]
      const jsonTask = JSON.stringify(newTask)
      localStorage.setItem('todoList', jsonTask)
      return newTask
    })
  };

  const handleToggleDelete = (item) => {
    const newList = todoList.map((el) => {
      if (el.id === item.id) {
        return {
          ...el,
          isDeleted: !el.isDeleted
        };
      }
      return el;
    });
    setToDoList(newList);
  };

  const doneTask = todoList.filter((task) => !task.isDeleted) 

  
  const handelCheckboxBoolean = (checked) => {
    setBoolean(checked)
  }
  useEffect (()=> {
    setFilterList(todoList.filter((items) => {
      return items.isDeleted == false
    }))
    
  },[todoList])

  console.log(filterList);
  
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader handleChangeNumberTask={doneTask.length}/>
        <Checkbox onFilter={handelCheckboxBoolean}/>

        {boolean ? 
        todoList.map((item,index) => 
        <TodoList 
        key={index}
        name={item.name}
        date={item.date}
        isDeleted={item.isDeleted}
        onDelete={() => handleToggleDelete(item)}
        /> ) 
        : 
        filterList.map((item,index) => 
        <TodoList 
        key={index}
        name={item.name}
        date={item.date}
        isDeleted={item.isDeleted}
        onDelete={() => handleToggleDelete(item)}
        /> ) 
        }

        <Form handleChangeList={handleChangeList}/>
      </div>
      <Footer />
    </div>
  );
};