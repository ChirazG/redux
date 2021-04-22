import './App.css';
import { useSelector } from 'react-redux'
import React, { useState } from "react";
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from "react-bootstrap";


function App() {

  const [choix, setChoix] = useState(null);

  const tasks = useSelector((state) => state.taskReducer);
  console.log(tasks);

  const handelfilterdone = () => {
    setChoix(true);
  };
  const handelfilterun = () => {
    setChoix(false);
  };
  const handelall = () => setChoix("ALL");

  return (
    <div className="App">

      <h1>My Plan of Today!</h1>
      <ButtonGroup aria-label="Basic example">
      
        <Button variant="light" onClick={handelall}>All</Button>
      
    
        <Button variant="light" onClick={handelfilterdone}>Done</Button>
      
      
        <Button variant="light" onClick={handelfilterun}>Undone</Button>
        </ButtonGroup>
      <Addtask />
      <ListTask choix={choix} />
    </div>

  );
}
export default App;//HOC
