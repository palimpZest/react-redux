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
        <div>
          <label>Name</label>
          <br />
          <StyledField
            required
            name="name"
            component="input"
            placeholder="Your task name"
            type="text"
          />
        </div>
        <br />
        <div>
          <label>Description</label>
          <br />
          <StyledField
            name="description"
            type="text"
            component="textarea"
            placeholder="Write description here!"
          />
        </div>
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
