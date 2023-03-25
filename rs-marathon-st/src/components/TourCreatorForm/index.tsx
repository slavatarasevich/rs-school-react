import React, { Component, createRef } from 'react';
import './style.scss';

import TourCardsList from '../TourCardsList';

class TourCreatorForm extends Component {
  private inputTourRef: React.RefObject<HTMLInputElement>;

  private inputDateRef: React.RefObject<HTMLInputElement>;

  private selectValueRef: React.RefObject<HTMLInputElement>;

  private checkBoxRef: React.RefObject<HTMLInputElement>;

  private radio1Ref: React.RefObject<HTMLInputElement>;

  private radio2Ref: React.RefObject<HTMLInputElement>;

  private inputFileRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      dataFromForm: [],
      selectedRadio: null,
      imageSrc: null,
    };
    this.inputTourRef = createRef();
    this.inputDateRef = createRef();
    this.selectValueRef = createRef();
    this.checkBoxRef = createRef();
    this.radio1Ref = createRef();
    this.radio2Ref = createRef();
    this.inputFileRef = createRef();
    this.typeTour = ['Beach', 'Medical', 'Cultural', 'Adventure', 'WildLife'];
    this.inputNameValue = '';
    this.inputDateValue = '';
  }

  onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputNameValue = this.inputTourRef.current.value;
    this.inputNameValue = inputNameValue;
    const inputDateValue = this.inputDateRef.current.value;
    this.inputDateValue = inputDateValue;
    const selectValue = this.selectValueRef.current.value;
    this.selectValue = selectValue;
    const checkBoxValue = this.checkBoxRef.current;
    this.checkBoxValue = checkBoxValue;
    const radioValue1 = this.radio1Ref.current;
    this.radioValue1 = radioValue1;
    const radioValue2 = this.radio2Ref.current;
    this.radioValue2 = radioValue2;
    const selectedR = this.state.selectedRadio;
    this.selectedR = selectedR;
    const imgPath = this.state.imageSrc;
    this.imgPath = imgPath;

    const updatedData = [
      ...this.state.dataFromForm,
      {
        inputNameValue,
        inputDateValue,
        selectValue,
        selectedR,
        checkBoxValue,
        imgPath,
      },
    ];

    this.setState({
      dataFromForm: updatedData,
    });
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.inputTourRef.current.value = e.target.value;
  };

  selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.selectValueRef.current.value = e.target.value;
  };

  radioOnChange = () => {
    if (this.radio1Ref.current.checked) {
      this.setState({ selectedRadio: this.radio1Ref.current.value });
    } else if (this.radio2Ref.current.checked) {
      this.setState({ selectedRadio: this.radio2Ref.current.value });
    } else {
      this.setState({ selectedRadio: null });
    }
  };

  checkBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.checkBoxRef.current = e.target.checked;
  };

  fileOnChangeHandler = () => {
    const file = this.inputFileRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({ imageSrc: reader.result });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({ imageSrc: null });
    }
  };

  render() {
    console.log(this.state.imageSrc);
    return (
      <div className="form-page">
        <div className="form-wrapper">
          <form onSubmit={this.onSubmit} id="form">
            <h1>Tour creator</h1>

            {/* ------------------/ INPUT NAME & DATE /------------------------------------*/}

            <input
              type="text"
              id="text"
              placeholder="tour name"
              ref={this.inputTourRef}
              onChange={this.onChangeInput}
            />
            <input type="date" id="date" ref={this.inputDateRef} />

            {/* ------------------/ DROP DOWN /--------------------------------------------*/}

            <select
              name=""
              id="dropdown__type-tour"
              onChange={this.selectHandler}
              ref={this.selectValueRef}
            >
              {this.typeTour.map((el, index) => (
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
                <input
                  type="radio"
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
                  name="radio-group"
                  value="No"
                  onChange={this.radioOnChange}
                  ref={this.radio2Ref}
                />
              </label>
            </div>

            {/* ------------------/ Check box /--------------------------------------------*/}

            <label className="scas-approval" htmlFor="scas-approval">
              <input
                type="checkbox"
                ref={this.checkBoxRef}
                id="scas-approval"
                onChange={this.checkBoxOnChange}
                // checked="false"
              />
              SCAS approved
            </label>

            {/* ----------------------------FILE UPLOAD-------------------------------------*/}

            <input
              type="file"
              ref={this.inputFileRef}
              accept="image/*"
              onChange={this.fileOnChangeHandler}
              id="upload"
            />

            <button type="submit">Create tour</button>
          </form>
        </div>
        {/* <p>{selectedR}</p> */}
        <TourCardsList data={this.state.dataFromForm} />
      </div>
    );
  }
}

export default TourCreatorForm;
