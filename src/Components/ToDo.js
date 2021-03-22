import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';

import './todo.scss';

export default function ToDo (props) {

    const [done, setDone] = useState(false);

    return(
        <div className="write-task" onClick={()=>{setDone(true)}}>
            {props.task} 
            {done && <CheckIcon />}
        </div>
    )
}