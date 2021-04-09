import { actionsTypes } from "../constants/course";

const initialState = {
  data: [
    { id: 1, name: "Nome 01", title: "React Native" },
    { id: 2, name: "Nome 02", title: "ReactJS" },
    { id: 3, name: "Nome 03", title: "NodeJS" }
  ]
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_COURSE:
      return { ...state, data: [...state.data, action.payload] };
    case actionsTypes.EDIT_COURSE:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case actionsTypes.DEL_COURSE:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default course;
