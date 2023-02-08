import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" ui standard modal visible active"
      >
        <div className="header ui items">
          <div className="item">
            <div
              className="right floated content"
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="close icon"></i>
            </div>
            <div>{props.header}</div>
          </div>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
<div>
  <h1>Modal</h1>
</div>;
