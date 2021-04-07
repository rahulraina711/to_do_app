import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import confStore from './store/configStore';
import {taskAdded} from './store/todos'

const store = confStore();
store.dispatch(taskAdded({desc:"task No. 1"}));
console.log(store.getState());
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
