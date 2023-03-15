import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h1>404 page</h1>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}

export default NotFound;
