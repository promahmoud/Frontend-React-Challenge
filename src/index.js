import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Task1", desc:'task desc', status:'fkfk' ,completed: true },
  { id: "todo-1", name: "Task2", desc:'task desc', status:'ffk', completed: false },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App tasks={DATA} />
  </React.StrictMode>
);


