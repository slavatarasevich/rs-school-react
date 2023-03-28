/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import CardsList from '../../components/CardsList';
import data from '../../mock/fakeData.json';
import './style.scss';

type Data = { id: number; img: string; title: string; price: number }[];

function Home() {
  // eslint-disable-next-line @typescript-eslint/ban-types

  // componentDidMount() {
  //   const keyInput = localStorage.getItem('keyInput');
  //   this.setState({ value: keyInput ?? '' });
  //   this.setState({ dataList: data });
  // }

  // componentWillUnmount() {
  //   localStorage.setItem('keyInput', this.state.value);
  // }

  return (
    <div className="home-container">
      <h1>Home page</h1>
      <input type="text" onChange={inputHandler} value={} placeholder="Search" />
      <CardsList data={this.state.dataList} />
    </div>
  );
}

export default Home;
