/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import CardsList from '../../components/CardsList';
import mock from '../../mock/fakeData';
import './style.scss';

function Home() {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(
    () => () => {
      localStorage.setItem('keyInput', inputValue);
    },
    [inputValue]
  );

  useEffect(() => {
    const myKey = localStorage.getItem('keyInput');
    setInputValue(myKey ?? '');
  }, []);

  return (
    <div className="home-container">
      <h1>Home page</h1>
      <input type="text" onChange={inputHandler} value={inputValue} placeholder="Search" />
      <CardsList data={mock} />
    </div>
  );
}

export default Home;
