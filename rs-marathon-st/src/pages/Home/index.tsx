/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import Spinner from '../../components/Spinner/index';
import CardsList from '../../components/CardsList';
import Modal from '../../components/Modal';
import Notification from '../../components/Notification';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characterId, setCharacterId] = useState('');

  useEffect(() => {
    (async () => {
      let charactersData;
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        charactersData = (await response.json()).results;
        const myKey = localStorage.getItem('keyInput');
        setInputValue(myKey ?? '');
      } catch (error) {
        charactersData = [];
      }

      setAllCharacters(charactersData);
      setIsLoading(false);

      return;
    })();
  }, []);

  useEffect(
    () => () => {
      localStorage.setItem('keyInput', inputValue);
    },
    [inputValue]
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        .then((data) => setAllCharacters(data.data.results));
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        .catch(function (error) {
          setShowNotification(true);
          setInputValue('');
          setTimeout(() => {
            setShowNotification(false);
          }, 1500);
        });
    }
  };

  if (showNotification) {
    return <Notification />;
  }

  if (allCharacters) {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <div className="search-box">
          <input
            type="text"
            onChange={inputHandler}
            onKeyDown={handleKeyDown}
            value={inputValue}
            placeholder="character's name"
          />
        </div>
        {isLoading && <Spinner />}
        {showModal && <Modal charId={characterId} closeModal={setShowModal} />}
        <CardsList data={allCharacters} openModal={setShowModal} charId={setCharacterId} />
      </div>
    );
  } else {
    <Spinner />;
  }
}
export default Home;
