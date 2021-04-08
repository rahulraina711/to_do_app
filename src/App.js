import React,{useState, useEffect} from 'react';
import './app.scss';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import ToDos from './Components/ToDo';
import { useDispatch, useSelector } from 'react-redux';
import {taskAdded} from './store/todos';


function App() {
  const [textValue, setTextValue] = useState(""); // controlledDOM element value
  const tasksFromState = useSelector(state=>state.tasks);
  const dispatch = useDispatch();

  useEffect(()=>{
    renderTasks();
  },[])
 

  function addTask (){
    dispatch(taskAdded({desc:textValue}));
    localStorage.setItem(textValue, false)
    setTextValue("");
   }

  function renderTasks () {
    if(tasksFromState){
      return tasksFromState.map((task,i)=>{
        return <ToDos key={task.id} task={task.desc} id={task.id} done={task.done} />
      })
    }
  }

  return (
    <div className="main-frame">
      <div className="to-do-area">
        <div className="app-title">
          To-dos' for today
        </div>
        <div className="to-dos">
          {renderTasks()}
        </div>
      <div className="add-to-do">
          <TextField className="to-do-text-area" id="filled-basic" label="Add a Task" variant="filled" value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} />
          <AddIcon className="add-btn-plus" id="add-to-do-btn" onClick={addTask}/>
      </div>
      </div>
    </div>
  )
}

export default App;
