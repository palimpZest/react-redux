import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask, editTask, deleteTask } from './actions/tasks';
import logo from './logo.svg';
import './App.css';
import EnhancedTaskForm from './components/TaskForm';
import EditComponent from './components/EditComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
  }
  componentDidMount() {
    this.props.getAllTasks();
  }
  onEditHandler(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }
  onDeleteHandler(e) {
    e.preventDefault();
    this.props.deleteTask(e.target.value);
    setTimeout(() => {
      this.props.getAllTasks();
    }, 50);
  }
  returnHandler() {
    this.setState({ editing: false });
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
            {this.props.tasks.tasks.map(
              (task, index) =>
                this.state.editing ? (
                  <EditComponent
                    returnHandler={this.returnHandler}
                    task={task}
                    key={task._id}
                  />
                ) : (
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
                      onClick={this.onEditHandler}
                      style={{
                        position: 'relative',
                        top: '-5px',
                        left: '192px',
                        border: 'solid black 0.5px',
                        borderRadius: '3px',
                        width: '35px',
                        color: '#fff',
                        background: 'orange'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      value={task._id}
                      onClick={this.onDeleteHandler}
                      style={{
                        position: 'relative',
                        top: '-60px',
                        left: '157px',
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
                )
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
  return bindActionCreators(
    { getAllTasks, addTask, editTask, deleteTask },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
