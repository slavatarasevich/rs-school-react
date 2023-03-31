/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TourCard from '../TourCard';
import './style.scss';

export interface TourCardsListProps {
  data: Array<{
    inputTour: string;
    inputTourDate: string;
    typeTour: string;
    radioInput: string;
    scas: null | boolean;
    imgPath: null | object;
  }>;
}

function TourCardsList({ data }) {
  return (
    <div className="cardList__wrapper_">
      {data.map((el, id) => (
        <TourCard
          key={id}
          title={el.inputTour}
          date={el.inputTourDate}
          type={el.typeTour}
          radioInput={el.radioInput}
          scas={el.checkBoxInput}
          imgPath={el.fileInput}
        />
      ))}
    </div>
  );
}

export default TourCardsList;
