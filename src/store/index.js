import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchDashboard, login, fetchAdmin } from "./reducers";

const combine = combineReducers({
  fetchDashboard,
  login,
  fetchAdmin,
});
const store = createStore(combine, applyMiddleware(thunk));

export default store;
