import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let city = {
    name:"Madrid",
    country:"spain"
};

ReactDOM.render(
   <h1 id="heading" className="cool-text">
       {city.name} is in {city.country} - Europe
       </h1>,
       
    document.getElementById('root'));


