import { GET_ADMIN_POST } from "../actions/types";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_POST:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
