import {createAction, createReducer} from '@reduxjs/toolkit';

export const taskAdded = createAction("taskAdded");

export const taskRemoved = createAction("taskRemoved");

// console.log(taskAdded({desc:"Here is task"}));

let lastId = 0;
const setIniState = ()=>{
    let arr = []
    for(let i=0;i<localStorage.length;i++){
        const item={
            id:1234+i,
            desc: localStorage.key(i),
            done: localStorage.getItem(localStorage.key(i))
        }
        arr.push(item);
    }
    return arr
}
const initialState = {tasks:setIniState()};
export default createReducer(initialState,{
    taskAdded: (state, action) => {
        state.tasks.push({
            id: ++lastId,
            desc: action.payload.desc,
        })
    },

    taskRemoved: (state, action) =>{return {
        ...state,
        tasks: state.tasks.filter(task=> task.id !== action.payload.id)
    }}
});

