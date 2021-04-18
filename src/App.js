import './App.css';
import {add} from './Actions/taskActions'
import {useSelector, useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import logo from './logo.svg'
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  /*const [keyword, setKeyword] = useState("")*/
  /*const [newRate, setNewRate] = useState(1)*/
  const [tasks, setTasks] = useState([
    {id:uuidv4(), todo:"Learn about React",done:false, undone:true, },
    {id:uuidv4(), todo:"Meet friend for lunch",done:false, undone:true, },
    {id:uuidv4(), todo:"Build really cool todo app",done:false, undone:true, },

  ]) 


  
  /*const tsk = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()*/
  return (
    <div className="App">
      <div className="App">
        <h1>My Plan of Today!</h1>
      <Addtask></Addtask>
      <ListTask tasks={tasks}></ListTask>
      
      {/*todo list */}
      {/*done */}
      </div>
    </div>
  );
}



export default App;//HOC
