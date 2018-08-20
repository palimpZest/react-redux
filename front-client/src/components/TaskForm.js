import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask } from '../actions/tasks';
import { withFormik } from 'formik';
import {
  StyledForm,
  StyledField,
  StyledButton,
  StyledLabel
} from './../styles/AppStyle';

class TaskForm extends Component {
  render() {
    return (
      <StyledForm>
        <StyledLabel>Name</StyledLabel>
        <br />
        <StyledField
          required
          name="name"
          component="input"
          autocomplete="off"
          placeholder="Your task name"
          type="text"
        />

        <br />
        <StyledLabel>Description</StyledLabel>
        <br />
        <StyledField
          name="description"
          type="text"
          component="input"
          autocomplete="off"
          placeholder="Write description here!"
        />
        <br />
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
