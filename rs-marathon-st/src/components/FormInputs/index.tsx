import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import './style.scss';

type FormInputsType = {
  inputTour: string;
  inputTourDate: string;
  typeTour: string;
  radioInput: string;
  checkBoxInput: null | boolean;
  fileInput: object;
  file: object;
};

const FormInputs: React.FC<FormInputsType> = ({ data, setData }) => {
  const [inputTour, setInputTour] = useState('');
  const [inputTourDate, setInputTourDate] = useState('');
  const [typeTour, setTypeTour] = useState('');
  const [radioInput, setRadioInput] = useState('');
  const [checkBoxInput, setCheckBoxInput] = useState(false);
  const [fileInput, setFileInput] = useState('');

  const tours = ['select type of tour', 'Beach', 'Medical', 'Cultural', 'Adventure', 'WildLife'];

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const copyAllData = [
      ...data,
      { inputTour, inputTourDate, typeTour, radioInput, checkBoxInput, fileInput },
    ];
    setData(copyAllData);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTour(e.target.value);
  };

  const onChangeInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTourDate(e.target.value);
  };

  const typeTourHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeTour(e.target.value);
  };

  const radioOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioInput(e.target.value);
  };

  const checkBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBoxInput(e.target.checked);
  };

  const fileOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFileInput(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setFileInput('');
    }
    setInputTour('');
    setInputTourDate('');
    setTypeTour('');
  };

  //   popup() {
  //     this.setState({ flagMsg: true });
  //     setTimeout(() => {
  //       this.setState({ flagMsg: false });
  //     }, 700);
  //   }

  return (
    <div className="form-inputs__container">
      <div className="form-wrapper">
        <form onSubmit={onSubmit} id="form">
          <h1>Tour creator</h1>

          {/* ------------------/ INPUT NAME & DATE /------------------------------------*/}

          <input
            type="text"
            id="text"
            placeholder="tour name (ex.: Milan)"
            onChange={onChangeInput}
            pattern="^[A-Z]+[a-zA-Z]*$"
            value={inputTour}
          />
          <input type="date" id="date" value={inputTourDate} onChange={onChangeInputDate} />

          {/* ------------------/ DROP DOWN /--------------------------------------------*/}

          <select name="" id="dropdown__type-tour" value={typeTour} onChange={typeTourHandler}>
            {tours.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>

          {/* ------------------/ Radio Buttons /--------------------------------------------*/}

          <div className="radio-group">
            <p>Kids are allowed?</p>
            <label htmlFor="radio-yes">
              Yes
              <input type="radio" name={radioInput} value="yes" onChange={radioOnChange} />
            </label>
            <label htmlFor="radio-no">
              No
              <input type="radio" name={radioInput} value="no" onChange={radioOnChange} />
            </label>
          </div>

          {/* ------------------/ Check box /--------------------------------------------*/}

          <label className="scas-approval" htmlFor="scas-approval">
            <input
              type="checkbox"
              id="scas-approval"
              onChange={checkBoxOnChange}
              value={checkBoxInput}
              name="yes"
            />
            SCAS approved
          </label>

          {/* ----------------------------FILE UPLOAD-------------------------------------*/}

          <input
            type="file"
            name="yes"
            accept="image/*"
            onChange={fileOnChangeHandler}
            id="upload"
          />

          <div className="form__controls">
            <button type="submit">Create tour</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormInputs;
