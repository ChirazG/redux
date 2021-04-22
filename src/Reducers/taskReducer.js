import { ADD, EDIT, DELETE, UNDONE, DONE } from '../Actions/types'


const initalTasks = []
const taskRaducer = (state = initalTasks, action) => {
    switch (action.type) {
        case ADD:
        return [...state,action.payload];
        case EDIT:
        return state.map((el)=>el.id==action.payload.id? {...el,description:action.payload.editTasck}:el);
        case DELETE:
        return [...state].filter((el)=>el.id!=action.payload);
        case DONE:
        return state.map((el)=> el.id == action.payload ? {...el,isDone:!el.isDone}:el);
        default:
            return state;

    }


}
export default taskRaducer