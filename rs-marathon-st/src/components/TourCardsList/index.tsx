/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TourCard from '../TourCard';
import './style.scss';

export interface TourCardsListProps {
  data: Array<{
    title: string;
    date: string;
    type: string;
    kidsAllowed: string;
    scas: string;
  }>;
}

function TourCardsList(props: TourCardsListProps) {
  return (
    <div className="cardList-wrapper">
      {props.data.map((el, id) => (
        <TourCard
          key={id}
          title={el.inputNameValue}
          date={el.inputDateValue}
          type={el.selectValue}
          kidsAllowed={el.selectedR}
          scas={el.checkBoxValue}
        />
      ))}
    </div>
  );
}

export default TourCardsList;
