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

function CardList({ data, setCharactorId }) {
  return (
    <div className="cardList__wrapper">
      {data.map((el, id) => (
        <Card
          key={el.id}
          id={el.id}
          img={el.image}
          name={el.name}
          species={el.species}
          status={el.status}
          setCharactorId={setCharactorId}
        />
      ))}
    </div>
  );
}

export default CardList;
