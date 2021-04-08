import React, { useEffect, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import './todo.scss';
import { useDispatch } from 'react-redux';
import { taskRemoved } from '../store/todos';

export default function ToDo (props) {

    const [done, setDone] = useState(false);
    const [color, setColor] = useState("write-task");
    const dispatch = useDispatch();
    // const tasks = useSelector(state=>state.tasks);

    useEffect(()=>{
        checkAttrs();
    },[])

    function deleteTask (){
        setTimeout(()=>{
            dispatch(taskRemoved({id:props.id}))
            localStorage.removeItem(props.task);
        },1000);
        
        setColor("delete");
    }

    function checkAttrs(){
        //console.log(props.res);
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