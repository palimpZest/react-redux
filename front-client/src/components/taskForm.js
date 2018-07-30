import React from "react";
import { Field, reduxForm } from "redux-form";

let TaskForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <br />
        <br />
        <Field name="name" component="input" placeholder="Your task name" type="text" />
      </div>
      <br />
      <div>
        <label>Description</label>
        <br />
        <br />
        <Field name="description" component="textarea" placeholder="Write description here" type="text" rows="4" cols="35" />
      </div>
      <br />
      <button type="submit">Add</button>
    </form>;
};

TaskForm = reduxForm({
  form: "taskform"
})(TaskForm)

export default TaskForm;
