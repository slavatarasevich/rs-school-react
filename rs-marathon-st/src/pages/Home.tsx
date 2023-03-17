import React from 'react';

import './home.scss';
import Header from '../components/Header';
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
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <span>{item.price}$ per trip</span>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
