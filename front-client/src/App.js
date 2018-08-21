import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask, editTask, deleteTask } from './actions/tasks';
import EnhancedTaskForm from './components/TaskForm';
import EditComponent from './components/EditComponent';
import {
  StyledAppWrapper,
  Container,
  AppLogo,
  AppHeader,
  AppTitle,
  StyledPlaceholder,
  StyledTaskHolder,
  StyledButton,
  StyledList,
  StyledText,
  StyledDescription
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
        <Container>
          {this.state.editing ? (
            <div>
              <h2>Edit your tasks</h2>
              <StyledPlaceholder />
              <StyledButton back onClick={this.returnHandler}>
                Back to tasks
              </StyledButton>
            </div>
          ) : (
            <div>
              <h2>Write your tasks</h2>
              <EnhancedTaskForm />
              <StyledButton orange onClick={this.onEditHandler}>
                Edit tasks
              </StyledButton>
            </div>
          )}
          <section>
            <h2>Browse your tasks</h2>
            <StyledTaskHolder>
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
                      <StyledDescription>{task.description}</StyledDescription>
                      <br />
                      <StyledButton
                        red
                        value={task._id}
                        onClick={this.onDeleteHandler}
                      >
                        X
                      </StyledButton>
                    </StyledList>
                  )
              )}
            </StyledTaskHolder>
          </section>
        </Container>
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
