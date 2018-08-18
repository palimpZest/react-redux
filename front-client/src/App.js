import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask, editTask, deleteTask } from './actions/tasks';
import EnhancedTaskForm from './components/TaskForm';
import EditComponent from './components/EditComponent';
import {
  StyledAppWrapper,
  AppLogo,
  AppHeader,
  AppTitle,
  StyledBackButton,
  StyledList,
  StyledText,
  StyledEditButton,
  StyledDeleteButton
} from './styles/AppStyle';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
    this.selectTextHandler = this.selectTextHandler.bind(this);
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
  selectTextHandler(e) {
    e.preventDefault();
    e.target.select();
  }
  render() {
    return (
      <StyledAppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React-redux</AppTitle>
        </AppHeader>
        <h2>Write your tasks</h2>
        <EnhancedTaskForm />
        <section>
          <h2>Browse your tasks</h2>
          <ul>
            {this.state.editing ? (
              <StyledBackButton onClick={this.returnHandler}>
                Back to tasks
              </StyledBackButton>
            ) : null}
            {this.props.tasks.tasks.map(
              (task, index) =>
                this.state.editing ? (
                  <EditComponent
                    returnHandler={this.returnHandler}
                    selectTextHandler={this.selectTextHandler}
                    task={task}
                    key={task._id}
                  />
                ) : (
                  <StyledList key={index}>
                    <br />
                    <StyledText>{task.name}</StyledText>
                    <br />
                    <span>{task.description}</span>
                    <br />
                    <StyledEditButton
                      value={task._id}
                      onClick={this.onEditHandler}
                    >
                      Edit
                    </StyledEditButton>
                    <StyledDeleteButton
                      value={task._id}
                      onClick={this.onDeleteHandler}
                    >
                      X
                    </StyledDeleteButton>
                  </StyledList>
                )
            )}
          </ul>
        </section>
      </StyledAppWrapper>
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
