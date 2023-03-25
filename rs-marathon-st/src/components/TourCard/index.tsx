import React, { Component } from 'react';
import './style.scss';

export interface Props {
  title: string;
  date: string;
  type: string;
  kidsAllowed: string;
  scas: string;
}
class TourCard extends Component<Props> {
  render() {
    return (
      <div className="tourCard-container">
        <h1>{this.props.title}</h1>
        <p>Available from: {this.props.date}</p>
        <span>Tour type: {this.props.type}</span>
        <span>Kids are allowed: {this.props.kidsAllowed}</span>
        <span className="scas-approval">
          {this.props.scas ? 'SCAS approved' : 'Not approved by SCAS'}
        </span>
      </div>
    );
  }
}

export default TourCard;
