import React, { Component } from 'react';
import Voting from './components/Voting';
import Winner from './components/Winner';
import './App.css';

class App extends Component {
  render () {

    return (
      <div>
        {
          this.props.winner
          ? <Winner ref='winner' winner={this.props.winner} />
          : <Voting pair={this.props.pair} hasVoted={this.props.hasVoted} />
        }
      </div>
    );
  }
}

export default App;
