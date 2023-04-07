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

function CardList({ data }) {
  return (
    <div className="cardList__wrapper">
      {data.map((el, id) => (
        <Card key={el.id} img={el.image} name={el.name} species={el.species} status={el.status} />
      ))}
    </div>
  );
}

export default CardList;
