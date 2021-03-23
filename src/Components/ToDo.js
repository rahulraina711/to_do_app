import React, { useEffect, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import './todo.scss';

export default function ToDo (props) {

    const [done, setDone] = useState(false);
    const [color, setColor] = useState("write-task");

    useEffect(()=>{
        checkAttrs();
    },[])

    function deleteTask (){
        localStorage.removeItem(props.task);
        setColor("delete");
    }

    function checkAttrs(){
        console.log(props.done);
        if(props.done==="true"){
            console.log("if here");
            setDone(true);
            setColor("write-task-done");
        }
        else if(props.done==="false"){
            console.log("else here");
            setDone(false);
            setColor("write-task");
        }        
    }

    function setAttrs(){
        localStorage.setItem(props.task, true);
        setDone(true);
        setColor("write-task-done");
    }

    return(
        <div className={color} >
            <div className="text" onClick={setAttrs}>{props.task}</div>
            <div className="done" onClick={deleteTask}>{done ? <CheckIcon /> : <DeleteIcon />}</div> 
        </div>
    )
}