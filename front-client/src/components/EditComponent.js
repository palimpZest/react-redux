import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTasks, editTask } from '../actions/tasks';
import { withFormik } from 'formik';
import {
  StyledButton,
  StyledEditForm,
  StyledEditField,
  StyledList
} from './../styles/AppStyle';

class EditComponent extends Component {
  render() {
    return (
      <StyledList>
        <StyledEditForm>
          <StyledEditField
            component="input"
            autoComplete="off"
            type="text"
            required
            placeholder="Add a name"
            name="name"
            editname={this.props.editname ? 'true' : 'false'}
            onFocus={this.props.selectTextHandler}
          />
          <StyledEditField
            component="textarea"
            autoComplete="off"
            type="text"
            placeholder="Add a description"
            rows="1"
            name="description"
            editdescription={this.props.description ? 'true' : 'false'}
            onFocus={this.props.selectTextHandler}
          />
          <StyledButton update type="submit">
            &#10003;
          </StyledButton>
        </StyledEditForm>
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
