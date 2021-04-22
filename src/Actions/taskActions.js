import {ADD, DELETE, UNDONE, DONE, EDIT,FILTER_DONE_TASCK, FILTER_UNDONE_TASCK, CHECK_DONE_TASCK } from './types'

export const add=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
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
export const done=(id)=>{
    return{
        type:CHECK_DONE_TASCK,
        payload:id
    }
}
export const edit=(id, edittask)=>{
    return{
        type:EDIT,
        payload:{id:id,edittask},
    }
}
export const filterDone=()=>{
    return{
     type:FILTER_DONE_TASCK
 }
}
 export const filterUndone=()=>{
     return{
    type:FILTER_UNDONE_TASCK
}
}