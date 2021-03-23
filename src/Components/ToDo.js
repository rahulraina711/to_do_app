import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import './todo.scss';

export default function ToDo (props) {

    const [done, setDone] = useState(false);
    const [color, setColor] = useState("write-task");

    return(
        <div className={color} >
            <div className="text" onClick={()=>{setDone(true);setColor("write-task-done")}}>{props.task}</div>
            <div className="done">{done ? <CheckIcon /> : <DeleteIcon />}</div> 
        </div>
    )
}