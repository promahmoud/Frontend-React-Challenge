import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Task1", desc:'task desc', status:'Finished' ,completed: true },
  { id: "todo-1", name: "Task2", desc:'task desc', status:'not_started', completed: false },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App tasks={DATA} />
  </React.StrictMode>
);


