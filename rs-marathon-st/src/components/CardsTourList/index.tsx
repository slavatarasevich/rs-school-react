/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TourCard from '../TourCard';
import './style.scss';

export interface TourCardsListProps {
  data: Array<{
    checkBoxValue: string;
    selectedR: string;
    selectValue: string;
    inputDateValue: string;
    inputNameValue: string;
    title: string;
    date: string;
    type: string;
    kidsAllowed: string;
    scas: string;
    imgPath: object;
  }>;
}

function TourCardsList(props: TourCardsListProps) {
  return (
    <div className="cardList__wrapper_">
      {props.data.map((el, id) => (
        <TourCard
          key={id}
          title={el.inputNameValue}
          date={el.inputDateValue}
          type={el.selectValue}
          kidsAllowed={el.selectedR}
          scas={el.checkBoxValue}
          imgPath={el.imgPath}
        />
      ))}
    </div>
  );
}

export default TourCardsList;
