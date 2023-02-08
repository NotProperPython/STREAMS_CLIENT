import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    // console.log(props.currentUserId);
    if (stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderStreamsList = () => {
    return props.streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/show/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    if (props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderStreamsList()}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
