import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'

const ListTask = () => {
    let tasks = useSelector(state => state)
    return (
        <div>
            <h3>To do List</h3>
            {tasks.map(task=>{
                return <Task key={task.id}/>
            })}
            
        </div>
    )
}

export default ListTask
