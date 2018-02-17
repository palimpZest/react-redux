import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-redux</h1>
        </header>
        <h2>Write your tasks</h2>
        <form action="/">
          <label>Name</label>
          <br />
          <input type="text" name="name" placeholder="Your task name" />
          <br />
          <br />
          <label>Description</label>
          <br />
          <input type="text" name="description" placeholder="Write description here" />
          <br/>
          <br/>
          <button type="submit" onClick={{}}>
            Add
          </button>
        </form>
      </div>;
  }
}

export default App;