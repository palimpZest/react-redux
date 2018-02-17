import axios from "axios";

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const GET_ALL_TASKS_SUCCESS = "GET_ALL_TASKS_SUCCESS";

const API_URL = "http://localhost:3000";

function add_task_success(task) {
  return {
    type: ADD_TASK_SUCCESS,
    task
  };
}

function get_all_tasks_success(tasks) {
  return { type: GET_ALL_TASKS_SUCCESS, tasks };
}

export function getAllTasks() {
  return dispatch => {
    axios.get(API_URL)
    .then(response => dispatch(get_all_tasks_success(response.data)));
  };
}

export function AddTask(item) {
  return dispatch => {
    axios.post(API_URL, {name: item.name, description: item.description } )
    .then(response => dispatch(add_task_success(response.data)));
  };
}