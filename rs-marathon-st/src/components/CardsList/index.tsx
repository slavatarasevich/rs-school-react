import Card from '../Card/index';
import './style.scss';

export interface CardsListProps {
  data: Array<{
    img: string;
    name: string;
    species: string;
    status: string;
  }>;
}

function CardList({ data, openModal, charId }) {
  return (
    <div className="cardList__wrapper">
      {data.map((el, index) => (
        <Card
          key={index}
          id={el.id}
          img={el.image}
          name={el.name}
          species={el.species}
          status={el.status}
          open={openModal}
          setId={charId}
        />
      ))}
    </div>
  );
}

export default CardList;
