import React, { useState } from 'react';
import './style.scss';

type FormInputsType = {
  inputNameValue: string;
  flagMsg: boolean;
  flag: boolean;
  imageSrc: null | object;
};

const FormInputs = () => {
  const [inputTour, setInputTour] = useState('');
  const [inputTourDate, setInputTourDate] = useState('');
  const [typeTour, setTypeTour] = useState('');

  const tours = ['select type of tour', 'Beach', 'Medical', 'Cultural', 'Adventure', 'WildLife'];

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('1st input');

    // const { dataFromForm, imageSrc, selectedRadio } = this.state;
    // const inputNameValue = this.inputTourRef.current.value;

    // const inputDateValue = this.inputDateRef.current.value;

    // const selectValue = this.selectValueRef.current.value;

    // const checkBoxValue = this.checkBoxRef.current;

    // const selectedR = selectedRadio;

    // const imgPath = imageSrc;

    // const updatedData = [
    //   ...dataFromForm,
    //   {
    //     inputNameValue,
    //     inputDateValue,
    //     selectValue,
    //     selectedR,
    //     checkBoxValue,
    //     imgPath,
    //   },
    // ];

    // this.setState({
    //   dataFromForm: updatedData,
    // });

    // this.popup();
    // this.myFormRef.reset();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTour(e.target.value);
  };

  const onChangeInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTourDate(e.target.value);
  };

  console.log(inputTour);
  console.log(inputTourDate);
  console.log(typeTour);

  const typeTourHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeTour(e.target.value);
  };

  //   radioOnChange = () => {
  //     if (this.radio1Ref.current.checked) {
  //       this.setState({ selectedRadio: this.radio1Ref.current.value });
  //     } else if (this.radio2Ref.current.checked) {
  //       this.setState({ selectedRadio: this.radio2Ref.current.value });
  //     } else {
  //       this.setState({ selectedRadio: null });
  //     }
  //   };

  //   checkBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     this.checkBoxRef.current = e.target.checked;
  //   };

  //   fileOnChangeHandler = () => {
  //     const file = this.inputFileRef.current.files[0];

  //     if (file) {
  //       const reader = new FileReader();

  //       reader.onload = () => {
  //         this.setState({ imageSrc: reader.result });
  //       };

  //       reader.readAsDataURL(file);
  //     } else {
  //       this.setState({ imageSrc: null });
  //     }
  //   };

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
            name="required"
          />
          <input
            type="date"
            id="date"
            value={inputTourDate}
            onChange={onChangeInputDate}
            required
            name="required"
          />

          {/* ------------------/ DROP DOWN /--------------------------------------------*/}

          <select
            name=""
            id="dropdown__type-tour"
            value={typeTour}
            defaultValue="select type"
            onChange={typeTourHandler}
          >
            {tours.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>

          {/* ------------------/ Radio Buttons /--------------------------------------------*/}

          {/* <div className="radio-group">
            <p>Kids are allowed?</p>
            <label htmlFor="radio-yes">
              Yes
              <input
                type="radio"
                required
                name="radio-group"
                value="Yes"
                onChange={this.radioOnChange}
                ref={this.radio1Ref}
              />
            </label>
            <label htmlFor="radio-no">
              No
              <input
                type="radio"
                required
                name="radio-group"
                value="No"
                onChange={this.radioOnChange}
                ref={this.radio2Ref}
              />
            </label>
          </div> */}

          {/* ------------------/ Check box /--------------------------------------------*/}

          {/* <label className="scas-approval" htmlFor="scas-approval">
            <input
              type="checkbox"
              ref={this.checkBoxRef}
              id="scas-approval"
              onChange={this.checkBoxOnChange}
              required
              name="yes"
            />
            SCAS approved
          </label> */}

          {/* ----------------------------FILE UPLOAD-------------------------------------*/}

          {/* <input
            type="file"
            ref={this.inputFileRef}
            required
            name="yes"
            accept="image/*"
            onChange={this.fileOnChangeHandler}
            id="upload"
          />
          <div className="form__controls">
            <button type="submit">Create tour</button>
            <input type="reset" value="Reset Form" />
          </div> */}
        </form>
      </div>
      {/* {flagMsg ? (
        <div className="popup__msg">
          <p>New tour has been created...</p> <img src="./src/assets/imgs/checkmark.png" alt="" />
        </div>
      ) : (
        <TourCardsList data={dataFromForm} />
      )} */}
    </div>
  );
};

export default FormInputs;
