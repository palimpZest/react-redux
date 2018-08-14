import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, editTask } from '../actions/tasks';
import { withFormik, Form, Field } from 'formik';

class EditComponent extends Component {
  render() {
    return (
      <div>
        <Form
          style={{
            listStyle: 'none',
            margin: '0 auto',
            border: 'solid black 1px',
            width: '400px',
            borderRadius: '5px'
          }}
        >
          <Field
            component="input"
            type="text"
            placeholder={this.props.task.name}
            name="name"
            required
            style={{
              fontWeight: 'bold',
              fontSize: '25px'
            }}
          />
          <br />
          <br />
          <Field
            component="textarea"
            type="text"
            placeholder={this.props.task.description}
            name="description"
            required
            rows="4"
            cols="35"
          />
          <br />
          <br />
          <button
            type="submit"
            style={{
              border: 'solid black 0.5px',
              borderRadius: '3px',
              width: '100px',
              color: '#fff',
              background: 'green',
              marginBottom: '1px',
              padding: '3px'
            }}
          >
            Update
          </button>
        </Form>
        <button
          onClick={this.props.returnHandler}
          style={{
            border: 'solid black 0.5px',
            borderRadius: '3px',
            width: '100px',
            color: '#fff',
            background: 'blue',
            margin: '3px',
            padding: '3px'
          }}
        >
          Back to tasks
        </button>
      </div>
    );
  }
}

const EnhancedEditComponent = withFormik({
  mapPropsToValues({ name, description }) {
    return {
      name: name || '',
      description: description || ''
    };
  },
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.dispatch(
      editTask({
        id: props.task._id,
        name: values.name,
        description: values.description
      })
    );
    setSubmitting(false);
    resetForm();
    props.returnHandler();
    setTimeout(() => {
      props.dispatch(getAllTasks());
    }, 50);
  },
  displayName: 'BasicEditForm'
})(EditComponent);

export default connect(dispatch =>
  bindActionCreators({ getAllTasks, editTask }, dispatch)
)(EnhancedEditComponent);
