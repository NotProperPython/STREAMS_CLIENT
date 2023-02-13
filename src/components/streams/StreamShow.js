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
    <>
      <div>
        <video ref={videoRef} style={videoStyle} controls={true} />
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
      <hr />

      {/* ADD COPY TAGS FOR STREAM LINKS */}
      {/* <div className="ui action input container">
        <label className="ui red horizontal label">Put this link in OBS</label>
        <input type="text" value="rtmp://localhost/live" />
        <button className="ui teal right labeled icon button">
          <i className="copy icon"></i>
          Copy
        </button>
      </div>
      <div className="ui action input container">
        <label className="ui red horizontal label">Put this ID in OBS</label>
        <input type="text" value="rtmp://localhost/live" />
        <button
          onClick={() => {
            navigator.clipboard.writeText(this.state.textToCopy);
          }}
          className="ui teal right labeled icon button"
        >
          <i className="copy icon"></i>
          Copy
        </button>
      </div> */}
    </>
  );
};

export default StreamShow;
