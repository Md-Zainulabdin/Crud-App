"use client";
import { DeleteTopicsFromDB } from "@/app/serverAction";
import React from "react";

const DeleteTopic = ({ id }) => {
  const onDeleteHandler = () => {
    let flag = confirm("Do you want to delete this topic");
    if (!flag) return;

    DeleteTopicsFromDB(id);
  };
  return (
    <div className="cursor-pointer" onClick={onDeleteHandler}>
      <span className="text-md text-red-400">Delete</span>
    </div>
  );
};

export default DeleteTopic;
