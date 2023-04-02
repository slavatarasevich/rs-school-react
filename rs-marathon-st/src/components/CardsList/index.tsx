import Card from '../Card/index';
import './style.scss';

export interface CardsListProps {
  data: Array<{
    id: number;
    img: string;
    title: string;
    price: number;
  }>;
}

function CardList(props: CardsListProps) {
  const { data } = props;
  return (
    <div className="cardList__wrapper">
      {data.map((el) => (
        <Card key={el.id} img={el.img} title={el.title} price={el.price} />
      ))}
    </div>
  );
}

export default CardList;
