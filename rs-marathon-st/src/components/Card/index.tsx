/* eslint-disable react/destructuring-assignment */
import './style.scss';

export interface Props {
  img: string;
  name: string;
  species: string;
  status: string;
  id: number;
}

function Card(props: Props) {
  return (
    <div
      onClick={() => {
        props.open(true);
        props.setId(props.id);
        console.log(props.id);
      }}
      className="card-container"
    >
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Card;
