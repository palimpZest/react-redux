import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask, deleteTask } from './actions/tasks';
import logo from './logo.svg';
import './App.css';
import EnhancedTaskForm from './components/taskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  componentDidMount() {
    this.props.getAllTasks();
  }
  onDeleteHandler(e) {
    this.props.deleteTask(e.target.value);
    setTimeout(() => {
      this.props.getAllTasks();
    }, 50);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-redux</h1>
        </header>
        <h2>Write your tasks</h2>
        <EnhancedTaskForm />
        <section>
          <h2>Browse your tasks</h2>
          <ul>
            {typeof this.props.tasks.tasks !== 'object' ? (
              <span
                style={{
                  color: '#DC143C',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                You need to add a task first!
              </span>
            ) : (
              this.props.tasks.tasks.map((task, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: 'none',
                    margin: '0 auto',
                    border: 'solid black 1px',
                    width: '400px',
                    borderRadius: '5px'
                  }}
                >
                  <br />
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '25px'
                    }}
                  >
                    {task.name}
                  </span>
                  <br />
                  <span>{task.description}</span>
                  <br />
                  <button
                    value={task._id}
                    onClick={this.onDeleteHandler}
                    style={{
                      position: 'relative',
                      top: '-32px',
                      left: '177px',
                      border: 'solid black 0.5px',
                      borderRadius: '3px',
                      width: '35px',
                      color: '#fff',
                      background: '#DC143C'
                    }}
                  >
                    X
                  </button>
                </li>
              ))
            )}
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
  return bindActionCreators({ getAllTasks, addTask, deleteTask }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
