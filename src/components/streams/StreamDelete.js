import React from "react";
import Modal from "../Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const navigate = useNavigate();

  // grabbing the "id" param from url params
  const { id } = useParams();

  //destructuring the stream "title" and "description"
  const { title } = useSelector((state) => state.streams[id]);

  const deleteStreamOnCLick = (e) => {
    e.stopPropagation();
    props.deleteStream(id);
    navigate("/");
  };

  const actions = (
    <>
      <button onClick={deleteStreamOnCLick} className="ui button negative">
        Delete
      </button>
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </>
  );

  return (
    <Modal
      header={`Delete Stream`}
      content={
        title
          ? `Are you sure you want to delete stream named: ${title}`
          : "Are you sure about that!"
      }
      actions={actions}
      onDismiss={() => {
        navigate("/");
      }}
    />
  );
};

export default connect(null, { deleteStream })(StreamDelete);
