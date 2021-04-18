import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

const Task = ({task}) => {

    return (
        <div className="todo">
        {task.todo}
      </div>
    )
}



export default Task
