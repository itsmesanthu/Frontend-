import React from 'react';

function withAuthentication(WrappedComponent) {
  const isLoggedIn = true; // Placeholder for authentication status

  return (props) => {
    if (isLoggedIn) {
      return <WrappedComponent isLoggedIn={isLoggedIn} {...props} />;
    } else {
      return <div>Please log in to view this content.</div>;
    }
  };
}

function AuthenticatedComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Authenticated Content</p>
      ) : (
        <p>Not Authenticated</p>
      )}
    </div>
  );
}

const EnhancedComponent =
  withAuthentication(AuthenticatedComponent);

export default EnhancedComponent;