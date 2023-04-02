/* eslint-disable react/destructuring-assignment */
import TourCard from '../TourCard';
import './style.scss';

export interface TourCardsListProps {
  data: Array<{
    inputTour: string;
    inputTourDate: string;
    typeTour: string;
    radioInput: string;
    checkBoxInput: null | boolean;
    fileInput: null | object;
  }>;
}

function TourCardsList({ data }: TourCardsListProps) {
  return (
    <div className="cardList__wrapper_">
      {data.map((el, index) => (
        <TourCard
          key={index}
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
