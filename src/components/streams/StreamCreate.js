import { React } from "react";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h1>Create a Stream</h1>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
