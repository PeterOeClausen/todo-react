import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/todo.component';
import * as serviceWorker from './serviceWorker';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Todo></Todo>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
