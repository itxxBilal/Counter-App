import React, { Component } from 'react';
import './index.css';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      stopwatchRunning: false,
    };

    this.timer = null; // Create a timer reference
  }

  increment = () => {
    if (!this.state.stopwatchRunning) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  decrement = () => {
    if (!this.state.stopwatchRunning) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  toggleStopwatch = () => {
    if (!this.state.stopwatchRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }, 1000); 
    } else {
      clearInterval(this.timer); 
    }

    this.setState((prevState) => ({
      stopwatchRunning: !prevState.stopwatchRunning,
    }));
  };

  render() {
    return (
      <div className="counter-card">
        <h2>Counter Application</h2>
        <div className="count">{this.state.count}</div>
        <button className="stopwatch-button" onClick={this.toggleStopwatch}>
          {this.state.stopwatchRunning ? 'Stop Stopwatch' : 'Start Stopwatch'}
        </button>
        <div className="button-container">
        <button className="decrement-button" onClick={this.decrement}>
            Decrement -
          </button>
          <button className="reset-button" onClick={this.reset}>
            Reset
          </button>
         
          <button className="increment-button" onClick={this.increment}>
            Increment +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
