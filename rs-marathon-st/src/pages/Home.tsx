import React from 'react';

import './home.scss';
import data from '../data/data.json';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <input type="text" placeholder="Search" />
        <div>
          {data.map((item, i) => (
            <li key={i}>
              {item.img}
              {item.title}
              {item.price}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
