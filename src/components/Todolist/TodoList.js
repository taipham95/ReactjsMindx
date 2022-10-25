import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = (props) => {
  return (
    <div className="todo-list-container" >
      <div onClick={props.onDelete} className={`todo-item-container ${props.isDeleted ? "done" : ""}`}>
        {props.isDeleted ? (
          <FaRegCheckCircle className="item-done-button" color="#9a9a9a" />
        ) : (
          <FaRegCircle  className="item-done-button" color="#9a9a9a" />
        )}
        <div className="item-title">{props.name}</div>
        <div className="item-title-dates">{props.date}</div>
      </div>
    </div>
  );
};

export default TodoList;
