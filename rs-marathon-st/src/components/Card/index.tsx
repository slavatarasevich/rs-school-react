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
        props.setCharactorId(props.id - 1);
        console.log(props.id);
      }}
      className="card-container"
    >
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.species}</p>
      <span>{props.status}</span>
    </div>
  );
}

export default Card;
