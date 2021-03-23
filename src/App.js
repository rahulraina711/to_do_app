import React,{useState, useEffect} from 'react';
import './app.scss';
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import ToDos from './Components/ToDo';

function App() {
  const [value, setValue] = useState(new Date());
  const [textValue, setTextValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
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
    console.log("clicked Add", textValue);
    let tasks = [...todoList, textValue]
    setTodoList(tasks);
    setTextValue("");
  }

  function renderTasks () {
    return todoList.map((task,i)=>{
      return <ToDos key={i} task={task}/>
    })
  }
 
  return (
    <div className="main-frame">
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
