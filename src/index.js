import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import confStore from './store/configStore';
// import {taskAdded} from './store/todos';
import {Provider} from 'react-redux';

const store = confStore();
// store.dispatch(taskAdded({desc:"task No. 1"}));
// store.dispatch(taskAdded({desc:"task No. 2"}));
// store.dispatch(taskAdded({desc:"task No. 3"}));
// store.dispatch(taskRemoved({id:2}));
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);
