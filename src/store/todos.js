import {createAction, createReducer} from '@reduxjs/toolkit';

export const taskAdded = createAction("taskAdded");

export const taskRemoved = createAction("taskRemoved");

// console.log(taskAdded({desc:"Here is task"}));

let lastId = 0;
const initialState = {tasks:[]}
export default createReducer(initialState,{
    taskAdded: (state, action) => {
        state.tasks.push({
            id: ++lastId,
            desc: action.payload.desc,
            res: false
        })
    },

    taskRemoved: (state, action) =>{return {
        ...state,
        tasks: state.tasks.filter(task=> task.id !== action.payload.id)
    }}
});

