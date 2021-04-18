import {ADD, DELETE, UNDONE,DONE, EDIT, } from './types'
export const add=(newTask)=>{
    return{
        type:ADD,
        payload:{newTask}
    }
}
export const efface=(id)=>{
    return{
        type:DELETE,
        payload:id,
    }
}
export const undone=()=>{
    return{
        type:UNDONE,
    }
}
export const done=()=>{
    return{
        type:EDIT,
    }
}
export const edit=()=>{
    return{
        type:EDIT,
    }
}