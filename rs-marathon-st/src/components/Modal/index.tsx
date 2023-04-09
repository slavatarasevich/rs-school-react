import { useState, useEffect } from 'react';
import './style.scss';
import Spinner from '../Spinner';

export interface Props {
  charId: number;
  closeModal: any;
}

const Modal = ({ charId, closeModal }) => {
  const [info, setInfo] = useState('');
  const [showSpinner, setShowSpinner] = useState(true);

  const clickHandler = () => {
    closeModal(false);
  };

  console.log('modal render');

  async function fetchData() {
    let charactersData;
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
      charactersData = await response.json();
      console.log(charactersData);
    } catch (error) {
      console.log(error, 'Slava!!!');
    }
    setInfo(charactersData);
    setShowSpinner(false);
  }
  console.log(info);

  useEffect(() => {
    fetchData();
    setShowSpinner(false);
  }, []);

  if (info) {
    return (
      <div className="overlay" onClick={clickHandler}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="btn">
            <div onClick={clickHandler} className="btn-close">
              X
            </div>
          </div>

          <div className="header-content">
            <img src={info.image} alt="" />
            <div className="header-name__id">
              <p>{info.name}</p>
              <span>id: {info.id}</span>
            </div>
          </div>

          <div className="main-content">
            <p>
              Gender: <span> {info.gender}</span>
            </p>
            <p>
              Origin: <span>{info.origin.name}</span>
            </p>
            <p>
              Location name: <span>{info.location.name}</span>
            </p>
            <p>
              Location link:
              <span>
                <a href="">{info.location.url}</a>
              </span>
            </p>

            <p>
              Status: <span>{info.status}</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Modal;
