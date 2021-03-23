import React,{useState, useEffect} from 'react';
import './app.scss';
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/ClearAll';
import { TextField } from '@material-ui/core';
import ToDos from './Components/ToDo';

function App() {
  const [value, setValue] = useState(new Date()); // clock time value
  const [textValue, setTextValue] = useState(""); // controlledDOM element value
  const [todoList, setTodoList] = useState([]);   // all the tasks are stored in this state

  useEffect(()=>{
    checkLocalStorage();
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

  function addTask (){
    //console.log("clicked Add", textValue);
    localStorage.setItem(textValue, false)
    let tasks = [...todoList, {task:textValue, done: false}];
    setTodoList(tasks);
    setTextValue("");
  }

  function checkLocalStorage(){
    const taskList = [];
    if(localStorage.length!==0){
      for(let i=0; i< localStorage.length;i++){
        const x = {
          task :localStorage.key(i),
          done :localStorage.getItem(localStorage.key(i))
        }; //object end
        taskList.push(x);
      }// for end
      setTodoList(taskList);

    }
  }

  function clearAll(){
    localStorage.clear();
    setTodoList([]);
  }

  function renderTasks () {
    return todoList.map((task,i)=>{
      return <ToDos key={i} task={task.task} done={task.done} />
    })
  }
 
  return (
    <div className="main-frame">
      <button className="clear-all" onClick={clearAll}>Clear All<ClearIcon /></button>
      <div className="clock">
        <Clock value={value} />
      </div>
      <div className="to-do-area">
        <div className="app-title">
          Todays Work List
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
