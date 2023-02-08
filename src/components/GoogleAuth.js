import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          // CLient Id is read from the environment variables
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
      return null;
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    const auth = window.gapi.auth2.getAuthInstance();
    // setIsSignedIn(auth.isSignedIn.get());
    if (isSignedIn) {
      props.signIn(auth.currentUser.get().getId());
    } else {
      props.signOut();
    }
  };

  const onSignInCLick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutCLick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderAuthButton = (isSignedIn) => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutCLick} className="ui red google button">
          <i className="google icon"></i>
          SignOut
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button onClick={onSignInCLick} className="ui blue google button">
          <i className="google icon"></i>
          SignIn
        </button>
      );
    }
  };

  return <div>{renderAuthButton(props.isSignedIn)}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
