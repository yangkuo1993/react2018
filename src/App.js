import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  activeLasers () {
    console.log(1)
  }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.activeLasers}>active lasers</button>
      </div>
    );
  }
}

export default App;
