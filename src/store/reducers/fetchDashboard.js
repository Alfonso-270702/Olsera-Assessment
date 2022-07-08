import { GET_DASHBOARD, GET_COMMENT } from "../actions/types";

const initialState = {
  dashboards: [],
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD:
      return {
        ...state,
        dashboards: state.dashboards.concat(action.payload),
      };
    case GET_COMMENT:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
