import axios from "axios";

import TodoDataService from "../resources/todoServices";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : "";
    const request = 
    TodoDataService
      .get(search)
      .then((resp) => dispatch({ type: "TODO_SEARCHED", payload: resp.data })
    );
  };
};

export const add = (description) => {
  return (dispatch) => {
    TodoDataService
      .create({ description })
      .then((resp) => dispatch(clear()))
      .then((resp) => dispatch(search()));
  };
};

export const markAsDone = (todo) => {
  return (dispatch) => {
    TodoDataService
      .update(todo._id, { ...todo, done: true })
      .then((resp) => dispatch(search())
    );
  };
};

export const markAsPending = (todo) => {
  return (dispatch) => {
    TodoDataService
      .update(todo._id, { ...todo, done: false })
      .then((resp) => dispatch(search())
    );
  };
};

export const remove = (todo) => {
  return (dispatch) => {
    TodoDataService
      .remove(todo._id)
      .then((resp) => dispatch(search()));
  };
};

export const clear = () => {
  return [{ type: "TODO_CLEAR" }, search()];
};
