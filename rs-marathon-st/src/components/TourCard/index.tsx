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
    return (
      <div className="tourCard-container">
        <h1>{this.props.title}</h1>
        <div className="text-info">
          <p>Available from: {this.props.date}</p>
          <span>Tour type: {this.props.type}</span>
          <br />
          <span>Kids are allowed: {this.props.kidsAllowed}</span>
          <br />
          <span className="scas-approval">
            {this.props.scas ? 'SCAS approved' : 'Not approved by SCAS'}
          </span>
        </div>
        <img src={this.props.imgPath} alt="" />
      </div>
    );
  }
}

export default TourCard;
