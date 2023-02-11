import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import flv from "flv.js";

const StreamShow = () => {
  const navigate = useNavigate();
  const videoRef = useRef();

  const videoStyle = {
    width: "100%",
  };

  // grabbing the "id" param from url params
  const { id } = useParams();

  //destructuring the stream "title" and "description"
  const { title, description } = useSelector((state) => state.streams[id]);

  useEffect(() => {
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} style={videoStyle} controls={true} />
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default StreamShow;
