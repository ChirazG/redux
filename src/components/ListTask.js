import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row } from "react-bootstrap";




const ListTask = ({ choix }) => {
    const initialTasks = useSelector(state => state.taskReducer)
    console.log(initialTasks)
    const affiche = (choix) => {
        switch (choix) {
            case true: return (initialTasks.filter((el) => el.isDone === true)).map((el) => <Task el={el} choix={choix} />);
            case false: return (initialTasks.filter((el) => el.isDone === false)).map((el) => <Task el={el} choix={choix} />);
            default: return initialTasks.map((el) => <Task el={el} />)
        }
    }
    return (
        <div>
        <Container>
            {affiche(choix)}
        </Container>
        </div>
    );
}


export default ListTask
    /*return (
        <div>
            {/*tasks.map(task => {
            return  <Task el={el} choix={choix} />*/