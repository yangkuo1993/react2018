import React, { Component } from 'react';
import './App.css';
import axios from './api/http'
class App extends Component {
  componentWillMount () {
    console.log('componentWillMount')
    axios.get('/topics').then((data) => {
      console.log(data)
    })
  }
  render() {
    return (
      <div>
       123
      </div>
    );
  }
}

export default App;
