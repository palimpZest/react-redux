import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllTasks, addTask } from "./actions/tasks";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", description: ""};
  }
  componentDidMount() {
    this.props.getAllTasks();
  }
  render() {
    return (
      <div className="App">
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
          <input
            type="text"
            name="description"
            placeholder="Write description here"
          />
          <br />
          <br />
          <button type="submit">
            Add
          </button>
        </form>
        <section>
          <h2>Browse your tasks</h2>
          <ul>
            {this.props.tasks.tasks.map((task, index) => (
              <li
                key={index}
                style={{ listStyle: "none", marginBottom: "10px" }}
              >
                <span>{task.name}</span>
                <br />
                <span>{task.description}</span>
                <br />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { getAllTasks, addTask }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
