import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  GET_ALL_TASKS_SUCCESS
} from '../actions/tasks';

export function tasks(state = { tasks: [] }, action) {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.concat(action.task) };
    case DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter(id => id !== action.task) };
    case GET_ALL_TASKS_SUCCESS:
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
}
