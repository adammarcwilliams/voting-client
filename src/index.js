import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const pair = ['Pulp Fiction', 'Kill Bill 2'];

ReactDOM.render(
  <App pair={pair} winner='' hasVoted='Pulp Fiction' />,
  document.getElementById('root')
);
