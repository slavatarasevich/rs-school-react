import React from 'react';
import Card from './Card/index';
import './cardsList.scss';

interface CardListProps {
  data: Array<{
    img: string;
    title: string;
    price: number;
  }>;
}

function CardList(props: CardListProps) {
  return (
    <div className="cardList-wrapper">
      {props.data.map((el, index) => {
        return (
          <Card key={index} img={el.img} title={el.title} price={el.price} />
        );
      })}
    </div>
  );
}

export default CardList;
