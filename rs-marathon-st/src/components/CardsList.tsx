import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import './cardsList.scss';

class CardList extends React.Component {
  render() {
    return (
      <div className="cardList-wrapper">
        {data.map((el, index) => {
          return (
            <Card key={index} img={el.img} title={el.title} price={el.price} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
