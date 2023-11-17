import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserFrom from './Components/Form/UserFrom'; // Adjusted import path
import GroceryForm from './Components/Form/GroceryForm'; // Adjusted import path


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <UserFrom /> */}
    <GroceryForm />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

