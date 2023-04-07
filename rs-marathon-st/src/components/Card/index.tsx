/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';

export interface Props {
  img: string;
  name: string;
  species: string;
  status: string;
}

function Card(props: Props) {
  return (
    <div className="card-container">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.species}</p>
      <span>{props.status}</span>
    </div>
  );
}

export default Card;
