import React from 'react';

import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Home;
