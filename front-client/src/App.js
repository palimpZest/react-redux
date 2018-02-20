import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllTasks, addTask } from "./actions/tasks";
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/taskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.getAllTasks();
  }

  submit = (values) => {
    console.log(values);
    this.props.addTask({
      name: values.name,
      description: values.description
    });
  };

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-redux</h1>
        </header>
        <h2>Write your tasks</h2>
        <TaskForm onSubmit={this.submit} />
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
      </div>;
  }
}
  
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { getAllTasks, addTask }, dispatch );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
