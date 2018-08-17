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
            required
            placeholder="Add a name"
            name="name"
            style={{
              fontWeight: 'bold',
              fontSize: '25px'
            }}
            onFocus={this.props.selectTextHandler}
          />
          <br />
          <br />
          <Field
            component="textarea"
            type="text"
            placeholder="Add a description"
            name="description"
            rows="4"
            cols="35"
            onFocus={this.props.selectTextHandler}
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
      </div>
    );
  }
}

const EnhancedEditComponent = withFormik({
  mapPropsToValues: (props, name, description) => {
    return {
      name: name || props.task.name,
      description: description || props.task.description
    };
  },
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    props.dispatch(
      editTask({
        id: props.task._id,
        name: values.name,
        description: values.description || 'No description'
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
