import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  // grabbing the "id" param from url params
  const { id } = useParams();

  //destructuring the stream "title" and "description"
  const { title, description } = useSelector((state) => state.streams[id]);

  const onSubmit = (formValues) => {
    props.editStream(id, formValues);
  };

  return (
    <div>
      <h1>Edit Stream</h1>
      {/* using the special initialValues tag to pass in the values */}
      <StreamForm initialValues={{ title, description }} onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { editStream })(StreamEdit);
