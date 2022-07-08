import { GET_DASHBOARD, GET_COMMENT } from "./types";
import axios from "axios";

export const getDashboard = (data) => {
  return {
    type: GET_DASHBOARD,
    payload: data,
  };
};

export const getDashboardAsync = (page) => {
  return async (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then(({ data }) => {
        dispatch(getDashboard(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getComment = (data) => {
  return {
    type: GET_COMMENT,
    payload: data,
  };
};

export const getCommentAsync = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(getComment(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
