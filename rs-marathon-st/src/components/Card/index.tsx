/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';

export interface Props {
  img: string;
  title: string;
  price: number;
}

function Card(props: Props) {
  return (
    <div className="card-container">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>
        Price per tour:
        <span>{` ${props.price}$`}</span>
      </p>
    </div>
  );
}

export default Card;
