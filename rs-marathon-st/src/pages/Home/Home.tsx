/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import CardsList from '../../components/CardsList';
import FullCard from '../../components/Modal';
import './style.scss';
import Modal from '../../components/Modal';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState(null);

  useEffect(() => {
    (async () => {
      let charactersData;
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        charactersData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        charactersData = [];
      }
      console.log('render');
      setAllCharacters(charactersData);
      setCharacters(charactersData);
      setIsLoading(false);
    })();
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        .then((data) => setCharacters(data.data.results));
    }
  };

  console.log(allCharacters);
  console.log(characters);
  console.log(characters[0]);

  return (
    <>
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
        {/* {isLoading && <span>HI</span>} */}
        {characterId ? (
          <Modal info={characters[characterId]} closePopUp={setCharacterId} />
        ) : (
          <CardsList data={characters} setCharactorId={setCharacterId} />
        )}
      </div>
    </>
  );
}

export default Home;
