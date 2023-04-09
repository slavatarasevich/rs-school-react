/* eslint-disable react/destructuring-assignment */
import './style.scss';

export interface Props {
  setId: number;
  open: boolean;
  img: string;
  name: string;
  id: string;
}

function Card(props: Props) {
  return (
    <div
      onClick={() => {
        props.open(true);
        props.setId(props.id);
      }}
      className="card-container"
    >
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Card;
