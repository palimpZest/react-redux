import axios from 'axios';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const GET_ALL_TASKS_SUCCESS = 'GET_ALL_TASKS_SUCCESS';

const API_URL = 'http://localhost:3000';

function add_task_success(task) {
  return {
    type: ADD_TASK_SUCCESS,
    task
  };
}

function edit_task_success(task) {
  return {
    type: EDIT_TASK_SUCCESS,
    task
  };
}

function delete_task_success(task) {
  return {
    type: DELETE_TASK_SUCCESS,
    task
  };
}

function get_all_tasks_success(tasks) {
  return { type: GET_ALL_TASKS_SUCCESS, tasks };
}

export function addTask(item) {
  return dispatch => {
    axios
      .post(API_URL, { name: item.name, description: item.description })
      .then(response => dispatch(add_task_success(response.data)));
  };
}

export function editTask(item) {
  return dispatch => {
    axios
      .put(`${API_URL}/${item.id}`, {
        name: item.name,
        description: item.description,
        editing: item.editing
      })
      .then(response => dispatch(edit_task_success(response.data)));
  };
}

export function deleteTask(item) {
  return dispatch => {
    axios
      .delete(`${API_URL}/${item}`)
      .then(response => dispatch(delete_task_success(response.data)));
  };
}

export function getAllTasks() {
  return dispatch => {
    axios
      .get(API_URL)
      .then(response => dispatch(get_all_tasks_success(response.data)));
  };
}
