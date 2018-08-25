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
    // localStorage POST
    let local_id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    let created = Date.now();
    let taskObject = {
      _id: local_id,
      name: item.name,
      description: item.description,
      created
    };
    Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
    };
    localStorage.setObject(local_id, taskObject);
    dispatch(add_task_success('new task added in localStorage'));

    // AXIOS POST
    // axios
    //   .post(API_URL, { name: item.name, description: item.description })
    //   .then(response => dispatch(add_task_success(response.data)));
  };
}

export function editTask(item) {
  return dispatch => {
    // localStorage PUT
    Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
    };
    let taskEditedObject = {
      _id: item.id,
      name: item.name,
      description: item.description,
      created: item.created
    };
    localStorage.setObject(item.id, taskEditedObject);
    dispatch(edit_task_success(`Task ${item.id} was edited on localStorage`));

    // AXIOS PUT
    // axios
    //   .put(`${API_URL}/${item.id}`, {
    //     name: item.name,
    //     description: item.description,
    //     editing: item.editing
    //   })
    //   .then(response => dispatch(edit_task_success(response.data)));
  };
}

export function deleteTask(item) {
  return dispatch => {
    // localStorage DELETE
    localStorage.removeItem(item);
    dispatch(delete_task_success('removed from localStorage' + item));
    dispatch(get_all_tasks_success([{}]));

    // AXIOS DELETE
    // axios
    //   .delete(`${API_URL}/${item}`)
    //   .then(response => dispatch(delete_task_success(response.data)));
  };
}

export function getAllTasks() {
  console.log('GET tasks function!');
  return dispatch => {
    // localStorage GET
    let tasksArray = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      tasksArray.push(JSON.parse(Object.values(localStorage)[i]));
    }
    let sortedTasksArray = tasksArray.sort((a, b) => {
      return b.created - a.created;
    });
    dispatch(get_all_tasks_success(sortedTasksArray));

    // AXIOS GET
    // axios
    //   .get(API_URL)
    //   .then(response => dispatch(get_all_tasks_success(response.data)));
  };
}
