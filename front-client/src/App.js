import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask, editTask, deleteTask } from './actions/tasks';
import EnhancedTaskForm from './components/TaskForm';
import EditComponent from './components/EditComponent';
import {
  StyledAppWrapper,
  UpperNav,
  Container,
  AppTextLogo,
  AppHeader,
  StyledTitle,
  StyledPlaceholder,
  StyledTaskHolder,
  StyledButton,
  StyledList,
  StyledText,
  StyledDescription
} from './styles/AppStyle';

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
        <UpperNav />
        <Container>
          <AppHeader>
            <AppTextLogo>tasker</AppTextLogo>
          </AppHeader>
          {this.state.editing ? (
            <div>
              <StyledTitle edittitle>Edit your tasks</StyledTitle>
              <StyledPlaceholder>
                <img
                  src="https://media.giphy.com/media/IwSG1QKOwDjQk/giphy.gif"
                  alt="update-loading"
                />
              </StyledPlaceholder>
              <StyledButton back onClick={this.returnHandler}>
                Back
              </StyledButton>
            </div>
          ) : (
            <div>
              <StyledTitle>Add your tasks</StyledTitle>
              <EnhancedTaskForm />
              <StyledButton edit onClick={this.onEditHandler}>
                Edit
              </StyledButton>
            </div>
          )}
          <section>
            <StyledTaskHolder>
              {this.props.tasks.tasks &&
                this.props.tasks.tasks.map(
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
                        <StyledText>{task.name}</StyledText>
                        <StyledDescription>
                          {task.description}
                        </StyledDescription>
                        <StyledButton
                          delete
                          value={task._id}
                          onClick={this.onDeleteHandler}
                        >
                          x
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
