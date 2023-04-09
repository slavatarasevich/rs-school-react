import './style.scss';

export interface Props {
  info: { id: number; name: string; status: string };
  setAction: any;
}

const Modal = ({ info, closePopUp }) => {
  const clickHandler = () => {
    closePopUp(null);
  };

  return (
    <div className="overlay" onClick={clickHandler}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

export default Modal;
