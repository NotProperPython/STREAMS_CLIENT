import { React } from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";

//need to be hoised out from the componenet as field was being rerendered
const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <div>{renderError(meta)}</div>
    </div>
  );
};

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

// *** A common form being used by both StreamCreate and StreamEdit ***
const StreamForm = (props) => {
  const navigate = useNavigate();
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
    // Here programmatic navigation to bring user back to all streams page
    navigate("/");
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field
        name="title"
        type="title"
        component={renderInput}
        label="Enter Title"
      />
      <Field
        name="description"
        type="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
      <button
        className="ui button red"
        type="button"
        disabled={props.pristine || props.submitting}
        onClick={props.reset}
      >
        Clear Values
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  // console.log(errors);
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
