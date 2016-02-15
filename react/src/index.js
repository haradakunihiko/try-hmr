import React from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo';

const rendered = ReactDOM.render(<Todo buttonLabel='click'/>, document.getElementById('content'));

window.rootComponent = rendered;