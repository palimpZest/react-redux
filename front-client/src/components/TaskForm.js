import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask } from '../actions/tasks';
import { withFormik } from 'formik';
import { StyledForm, StyledField, StyledButton } from './../styles/AppStyle';

class TaskForm extends Component {
  render() {
    return (
      <StyledForm>
        <StyledField
          required
          type="text"
          name="name"
          component="input"
          autoComplete="off"
          placeholder="What do you want to do?"
        />
        <StyledField
          type="text"
          name="description"
          component="input"
          autoComplete="off"
          placeholder="Where? When? Why? How?"
        />
        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
    );
  }
}

const EnhancedTaskForm = withFormik({
  mapPropsToValues({ name, description }) {
    return {
      name: name || '',
      description: description || ''
    };
  },
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.dispatch(
      addTask({
        name: values.name,
        description: values.description
      })
    );
    setSubmitting(false);
    resetForm();
    setTimeout(() => {
      props.dispatch(getAllTasks());
    }, 50);
  },
  displayName: 'BasicForm'
})(TaskForm);

export default connect(dispatch =>
  bindActionCreators({ addTask, getAllTasks }, dispatch)
)(EnhancedTaskForm);
