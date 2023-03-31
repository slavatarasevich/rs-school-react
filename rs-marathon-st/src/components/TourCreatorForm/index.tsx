import React, { Component, createRef } from 'react';
import './style.scss';

import TourCardsList from '../TourCardsList';

type TourCreatorFormType = {
  inputNameValue: string;
  flagMsg: boolean;
  flag: boolean;
  imageSrc: null | object;
};

class TourCreatorForm extends Component<TourCreatorFormType, { undefined: unknown }> {
  private inputTourRef: React.RefObject<HTMLInputElement>;

  private inputDateRef: React.RefObject<HTMLInputElement>;

  private selectValueRef: React.RefObject<HTMLInputElement> | null;

  private checkBoxRef: React.RefObject<HTMLInputElement>;

  private radio1Ref: React.RefObject<HTMLInputElement>;

  private radio2Ref: React.RefObject<HTMLInputElement>;

  private inputFileRef: React.RefObject<HTMLInputElement>;

  private typeTour: string[];

  constructor(props: TourCreatorFormType | Readonly<TourCreatorFormType>) {
    super(props);
    this.state = {
      dataFromForm: [],
      selectedRadio: null,
      imageSrc: null,
      flagMsg: false,
    };

    this.inputTourRef = createRef();
    this.inputDateRef = createRef();
    this.selectValueRef = createRef();
    this.checkBoxRef = createRef();
    this.radio1Ref = createRef();
    this.radio2Ref = createRef();
    this.inputFileRef = createRef();
    this.typeTour = ['Beach', 'Medical', 'Cultural', 'Adventure', 'WildLife'];
  }

  componentDidMount(): void {
    this.forceUpdate();
  }

  onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { dataFromForm, imageSrc, selectedRadio } = this.state;
    const inputNameValue = this.inputTourRef.current.value;

    const inputDateValue = this.inputDateRef.current.value;

    const selectValue = this.selectValueRef.current.value;

    const checkBoxValue = this.checkBoxRef.current;

    const selectedR = selectedRadio;

    const imgPath = imageSrc;

    const updatedData = [
      ...dataFromForm,
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

    this.popup();
    this.myFormRef.reset();
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

  popup() {
    this.setState({ flagMsg: true });
    setTimeout(() => {
      this.setState({ flagMsg: false });
    }, 700);
  }

  render() {
    const { flagMsg, dataFromForm } = this.state;

    return (
      <div className="form-page">
        <div className="form-wrapper">
          <form onSubmit={this.onSubmit} id="form">
            <h1>Tour creator</h1>

            {/* ------------------/ INPUT NAME & DATE /------------------------------------*/}

            <input
              type="text"
              id="text"
              placeholder="tour name (ex.: Milan)"
              ref={this.inputTourRef}
              onChange={this.onChangeInput}
              pattern="^[A-Z]+[a-zA-Z]*$"
              required
              name="required"
            />
            <input type="date" id="date" ref={this.inputDateRef} required name="required" />

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
            </div>

            {/* ------------------/ Check box /--------------------------------------------*/}

            <label className="scas-approval" htmlFor="scas-approval">
              <input
                type="checkbox"
                ref={this.checkBoxRef}
                id="scas-approval"
                onChange={this.checkBoxOnChange}
                required
                name="yes"
              />
              SCAS approved
            </label>

            {/* ----------------------------FILE UPLOAD-------------------------------------*/}

            <input
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
            </div>
          </form>
        </div>
        {flagMsg ? (
          <div className="popup__msg">
            <p>New tour has been created...</p> <img src="./src/assets/imgs/checkmark.png" alt="" />
          </div>
        ) : (
          <TourCardsList data={dataFromForm} />
        )}
      </div>
    );
  }
}

export default TourCreatorForm;
