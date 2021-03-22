import React,{useState, useEffect} from 'react';
import './App.css';
import Clock from "react-clock";
import DigitalClock from "./Components/misc/DigitalClock";
import 'react-clock/dist/Clock.css';

function App() {
  const [value, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div className="main-frame">
      <div className="clock">
        <Clock value={value} />
      </div>
      <div className="to-do-area">
        To-DO ARea
      </div>
    </div>
  )
}

export default App;
