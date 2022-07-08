import React from "react";
import { FormModal } from "../../components";
import { editPostAsync } from "../../store/actions/AdminAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Edit({ isOpen, onClose, edit }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const form = {
      title: e.target[1].value,
      body: e.target[2].value,
      userId: user.userId,
      id: edit.id,
    };
    dispatch(editPostAsync(form, navigate, onClose));
  };
  return (
    <>
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        title="Edit Form"
        onSubmit={onSubmit}
        data={edit}
        link="/admin"
      />
    </>
  );
}
