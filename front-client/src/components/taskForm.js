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
        <Field name="description" component="input" placeholder="Write description here" type="text" />
      </div>
      <br />
      <button type="submit">Add</button>
    </form>;
};

TaskForm = reduxForm({
  form: "taskform"
})(TaskForm)

export default TaskForm;