import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Actions/taskActions';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addtask = () => {
    const dispatch = useDispatch()
    const [task, setTask] = useState({
        description: "",
        id: uuidv4(),
        isDone: false
    })
    const handelchange = (e) => {
        setTask({ ...task, description: e.target.value })
    }
    const handeladd = (e) => {
        e.preventDefault()/*prevent reload*/
        dispatch(add(task))
        setTask({
            description: "",
            id: uuidv4(),
            isDone: false
        })
    }
    return (
        <div className="mb-3">

            <div className="row">
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Add a task" aria-label="Search" value={task.description} onChange={handelchange} />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handeladd}>Add</button>
                    </form>
                </nav>
            </div>

        </div>
    )
}

export default Addtask
