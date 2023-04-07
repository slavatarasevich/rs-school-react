import './style.scss';

export interface IFullCard {
  info: { id: number; name: string; status: string };
  setAction: any;
}

const FullCard = ({ info, closePopUp }) => {
  const clickHandler = () => {
    closePopUp(null);
  };

  return (
    <div className="full-card__container">
      <div className="info">
        <span>id: {info.id}</span>
        <p>Name: {info.name}</p>
        <p>Status: {info.status}</p>
      </div>
      <div onClick={clickHandler} className="btn-close">
        X
      </div>
    </div>
  );
};

export default FullCard;
