import './styles/index.css';
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './app/App';
import 'typeface-merriweather';
import 'typeface-pt-serif';
import 'typeface-lora';
import 'typeface-patua-one';
import 'typeface-boogaloo';
import 'typeface-bubblegum-sans';

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

window.onload = () => {
    render();
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
