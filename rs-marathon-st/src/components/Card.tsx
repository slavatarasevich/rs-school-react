import React from 'react';
import './card.scss';

interface CardProps {
  img: string;
  title: string;
  price: number;
}

class Card extends React.Component<CardProps, {}> {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} alt="" />
        <h3>{this.props.title}</h3>
        <p>
          Price per tour: <span>{this.props.price}$</span>
        </p>
      </div>
    );
  }
}

export default Card;
