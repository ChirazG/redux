import { ADD, DELETE, DONE, EDIT } from './types'

export const add = (newTask) => {
    return {
        type: ADD,
        payload: newTask
    }
}
export const efface = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}
export const done = (id) => {
    return {
        type: DONE,
        payload: id
    }
}
export const edit = (id, edittask) => {
    return {
        type: EDIT,
        payload: { id: id, edittask },
    }
}

