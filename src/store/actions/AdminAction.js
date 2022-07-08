import { GET_ADMIN_POST } from "./types";
import axios from "axios";

export const getAdminPost = (data) => {
  return {
    type: GET_ADMIN_POST,
    payload: data,
  };
};

export const getAdminPostAsync = (url) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (dispatch) => {
    if (user) {
      axios
        .get(`${url}?userId=${user.userId}`)
        .then(({ data }) => {
          dispatch(getAdminPost(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

export const addPostAsync = (form, navigate, onClose) => {
  return () => {
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: form,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        onClose();
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editPostAsync = (form, navigate, onClose) => {
  return () => {
    axios({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${form.id}`,
      data: form,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        onClose();
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePostAsync = (id, onClose) => {
  return () => {
    axios({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
