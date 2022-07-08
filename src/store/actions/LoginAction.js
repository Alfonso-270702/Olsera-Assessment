import { LOGIN } from "./types";
import axios from "axios";

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const loginAsync = (form, navigate) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${form.userId}`)
      .then(({ data }) => {
        dispatch(login(data));
        localStorage.setItem("user", JSON.stringify(form));
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
