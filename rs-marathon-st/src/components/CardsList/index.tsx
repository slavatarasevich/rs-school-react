import Card from '../Card/index';
import './style.scss';

export interface CardsListProps {
  dataProps: Array<{
    id: string;
    image: string;
    name: string;
  }>;
  openModal: boolean;
  charId: number;
}

function CardList(props: CardsListProps) {
  const { dataProps, openModal, charId } = props;
  return (
    <div className="cardList__wrapper">
      {dataProps.map((el, index) => (
        <Card
          key={index}
          id={el.id}
          img={el.image}
          name={el.name}
          open={openModal}
          setId={charId}
        />
      ))}
    </div>
  );
}

export default CardList;
