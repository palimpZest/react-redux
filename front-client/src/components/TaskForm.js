import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, addTask } from '../actions/tasks';
import { withFormik, Form, Field } from 'formik';

class TaskForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <div>
            <label>Name</label>
            <br />
            <br />
            <Field
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
            <br />
            <Field
              name="description"
              component="textarea"
              placeholder="Write description here"
              type="text"
              rows="4"
              cols="35"
            />
          </div>
          <br />
          <button type="submit">Add</button>
        </Form>
      </div>
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
