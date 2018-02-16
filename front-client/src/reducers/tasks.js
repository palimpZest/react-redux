import { ADD_TASK_SUCCESS, GET_ALL_TASKS_SUCCESS } from "../actions/tasks";

export function tasks(state = { tasks: [] }, action) {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.concat(action.task) };
      break;

    case GET_ALL_TASKS_SUCCESS:
      return { ...state, tasks: action.tasks };
      break;

    default:
      return state;
      break;
  }
}