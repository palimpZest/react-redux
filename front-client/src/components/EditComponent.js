import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, editTask } from '../actions/tasks';
import { withFormik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledField,
  StyledList
} from './../styles/AppStyle';

class EditComponent extends Component {
  render() {
    return (
      <StyledList>
        <StyledForm>
          <StyledField
            component="input"
            type="text"
            required
            placeholder="Add a name"
            name="name"
            onFocus={this.props.selectTextHandler}
          />
          <br />
          <br />
          <StyledField
            component="textarea"
            type="text"
            placeholder="Add a description"
            name="description"
            onFocus={this.props.selectTextHandler}
          />
          <br />
          <br />
          <StyledButton type="submit">Update</StyledButton>
        </StyledForm>
      </StyledList>
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
