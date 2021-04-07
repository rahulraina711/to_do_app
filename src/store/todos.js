import {createAction, createReducer} from '@reduxjs/toolkit';

export const taskAdded = createAction("taskAdded");

export const taskRemoved = createAction("taskRemoved");

// console.log(taskAdded({desc:"Here is task"}));

let lastId = 0;

export default createReducer([],{
    taskAdded: (state, action) => {
        state.push({
            id: ++lastId,
            desc: action.payload.description,
            res: false
        })
    }
})

