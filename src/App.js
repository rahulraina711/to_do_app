import React,{useState, useEffect} from 'react';
import './app.scss';
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/ClearAll';
import { TextField } from '@material-ui/core';
import ToDos from './Components/ToDo';
import { useDispatch, useSelector } from 'react-redux';
import {taskAdded, taskRemoved} from './store/todos';


function App() {
  const [value, setValue] = useState(new Date()); // clock time value
  const [textValue, setTextValue] = useState(""); // controlledDOM element value
  const [todoList, setTodoList] = useState([]);   // all the tasks are stored in this state
  const tasksFromState = useSelector(state=>state.tasks);
  const dispatch = useDispatch();

  useEffect(()=>{
    setLocalStorage();
    //checkLocalStorage();
    renderTasks();
  },[])
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

  function setLocalStorage (){
    const taskList= JSON.parse(localStorage.getItem('tasks'));
    if(!taskList) return localStorage.setItem('tasks',JSON.stringify(tasksFromState));
    // else {
    //   let obj = localStorage.getItem('tasks');
    //   obj.map(task=>dispatch(taskAdded({desc: task.desc})))
    // }   
  }

  function addTask (){
    dispatch(taskAdded({desc:textValue}));
    setTextValue("");
   }

  function clearAll(){
    localStorage.clear();
    setTodoList([]);
  }

  function renderTasks () {
    if(tasksFromState){
      return tasksFromState.map((task,i)=>{
        return <ToDos key={task.id} task={task.desc} id={task.id} res={task.res} />
      })
    }
  }


  
 
  return (
    <div className="main-frame">
      <button className="clear-all" onClick={clearAll}>Clear All<ClearIcon /></button>
      <div className="clock">
        <Clock value={value} />
      </div>
      <div className="to-do-area">
        <div className="app-title">
          To-dos' for today
        </div>
        <div className="to-dos">
          {renderTasks()}
        </div>
      <div className="add-to-do">
          <TextField className="to-do-text-area" id="filled-basic" label="Add a Task" variant="filled" value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} />
          <AddIcon id="add-to-do-btn" onClick={addTask}/>
      </div>
      </div>
    </div>
  )
}

export default App;
