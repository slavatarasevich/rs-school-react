import React, { Component, createRef } from 'react';
import './style.scss';

class TourCreatorForm extends Component {
  constructor(props) {
    super(props);
    this.inputTourRef = createRef();
    this.inputDateRef = createRef();
    this.selectValueRef = createRef();
    this.typeTour = ['Beach', 'Medical', 'Cultural'];
    this.radioRef = createRef();
    this.checkBoxRef = createRef();
    this.checkBoxRef.current = 'false';
  }

  onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(
      this.inputTourRef.current.value,
      this.inputDateRef.current.value,
      this.selectValueRef.current.value,
      this.radioRef.current.value,
      this.checkBoxRef.current.value
    );
  };

  selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.selectValueRef.current.value = e.target.value;
  };

  radioOnChange = (e) => {
    e.preventDefault();
    this.radioRef.current = e.target.value;
  };

  checkboxOnChange = (e) => {
    e.preventDefault();
    this.checkBoxRef.current.checked = e.target.checked;
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onSubmit} id="form">
          <h1>Tour creator</h1>

          {/* ------------------/ INPUT NAME & DATE /------------------------------------*/}

          <input type="text" id="text" placeholder="tour name" ref={this.inputTourRef} />
          <input type="date" id="date" ref={this.inputDateRef} />

          {/* ------------------/ DROP DOWN /--------------------------------------------*/}

          <select
            name=""
            id="dropdown-type_tour"
            onChange={this.selectHandler}
            ref={this.selectValueRef}
          >
            {this.typeTour.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>

          {/* ------------------/ RADIO /------------------------------------------ -----*/}

          <div className="radio-group">
            <p>Kids are allowed?</p>
            <label>
              Yes
              <input
                type="radio"
                onChange={this.radioOnChange}
                checked={this.inputTourRef === 'yes'}
                ref={this.radioRef}
                value="yes"
              />
            </label>
            <label>
              No
              <input
                type="radio"
                onChange={this.radioOnChange}
                checked={false}
                ref={this.radioRef}
                value="no"
              />
            </label>
          </div>

          {/* ------------------/ CHECK BOX /--------------------------------------- ----*/}

          <label for="scas-approval">
            <input
              type="checkbox"
              id="scas-approval"
              onClick={this.checkboxOnChange}
              value="true"
              checked={this.checkBoxRef}
            />
            SCAS approved
          </label>

          <input type="file" accept="image/*" id="upload" />
          <button type="submit">Create tour</button>
        </form>
      </div>
    );
  }
}

export default TourCreatorForm;
