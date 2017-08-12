import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board count={6} />, document.getElementById('root'));
registerServiceWorker();
