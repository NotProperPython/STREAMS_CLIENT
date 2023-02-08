import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const StreamShow = () => {
  const navigate = useNavigate();

  // grabbing the "id" param from url params
  const { id } = useParams();

  //destructuring the stream "title" and "description"
  const { title, description } = useSelector((state) => state.streams[id]);
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default StreamShow;
