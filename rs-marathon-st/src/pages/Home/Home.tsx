/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardsList from '../../components/CardsList';
import './style.scss';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

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
      const value = inputValue.toLowerCase();
      const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(value)
      );
      setCharacters(filteredCharacters);
    }
  };

  console.log(allCharacters);
  console.log(characters);

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

      {isLoading ? <span>Loading...</span> : <CardsList data={characters} />}
    </div>
  );
}

export default Home;
