import { actionsTypes } from "../constants/course";

export const add = data => ({
  type: actionsTypes.ADD_COURSE,
  payload: {
    id: Math.random(),
    name: data.name,
    title: data.title
  }
});

export const edit = (id, data) => ({
  type: actionsTypes.EDIT_COURSE,
  payload: {
    id,
    name: data.name,
    title: data.title
  }
});

export const remove = id => ({
  type: actionsTypes.DEL_COURSE,
  payload: {
    id
  }
});

export const mapDispatchActions = dispatch => {
  return {
    add: data => dispatch(add(data)),
    edit: (id, data) => dispatch(edit(id, data)),
    remove: id => dispatch(remove(id))
  };
};
