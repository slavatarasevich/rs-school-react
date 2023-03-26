import React, { Component } from 'react';
import './style.scss';

export interface Props {
  title: string;
  date: string;
  type: string;
  kidsAllowed: string;
  scas: string;
  imgPath: object;
}
class TourCard extends Component<Props> {
  render() {
    const { title, date, type, kidsAllowed, scas, imgPath } = this.props;
    return (
      <div className="tourCard-container">
        <h1>{title}</h1>
        <img src={imgPath} alt="" />
        <div className="text-info">
          <p>Available from: {date}</p>
          <span>Tour type: {type}</span>
          <br />
          <span>Kids are allowed: {kidsAllowed}</span>
          <br />
          <span className="scas-approval">{scas ? 'SCAS approved' : 'Not approved by SCAS'}</span>
        </div>
      </div>
    );
  }
}

export default TourCard;
