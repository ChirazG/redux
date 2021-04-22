import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button } from "react-bootstrap";


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
 
 /* const dispatch = useDispatch()*/
  return (
    <div className="App">
     
        <h1>My Plan of Today!</h1>
      
        <div >
            <Button style={{backgroundColor:" #ff8fc5" , color:"white",borderColor:"transparent" }} variant="outline-light" onClick= {handelall}>All tascks</Button>
        </div>
          <div>
           <Button  style={{backgroundColor:" #ff8fc5" , color:"white" ,borderColor:"transparent"}} variant="outline-light" onClick= {handelfilterdone}>Done</Button> 
        </div>
        <div >
            <Button  variant="light"  onClick={handelfilterun}>Undone</Button>
        </div>
        
        
          <Addtask />
        
       
        <ListTask choix={choix} />
        
     
    
      </div>
    
  );
}



export default App;//HOC
