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
    this.fileInputRef = createRef();
  }

  onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(
      this.inputTourRef.current.value,
      this.inputDateRef.current.value,
      this.selectValueRef.current.value,
      this.radioRef.current.value,
      this.checkBoxRef.current
      // this.fileInputRef.current
    );
  };

  selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.selectValueRef.current.value = e.target.value;
  };

  radioOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.radioRef.current.value = e.target.value;
  };

  checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.checkBoxRef.current = e.target.checked;
  };

  // fileOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   this.fileInputRef.current = e.target.files[0].name;

  // const formData = new FormData();
  // formData.append('file', this.fileInputRef.current.files[0]);
  // fetch('api/upload', {
  //   method: 'POST',
  //   body: formData,
  // })
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log('THere was a problem with fetch operation');
  //   });
  // .then(res=> console.log(res.data))
  // this.fileInputRef.current = this.fileInputRef.current.files[0].name;
  // };

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

          {/* ------------------/ RADIO /-----------------------------------------------*/}

          <div className="radio-group">
            <p>Kids are allowed?</p>
            <label htmlFor="radio-yes">
              Yes
              <input
                type="radio"
                onChange={this.radioOnChange}
                checked={this.inputTourRef === 'yes'}
                ref={this.radioRef}
                value="yes"
              />
            </label>
            <label htmlFor="radio-no">
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

          {/* ------------------/ CHECK BOX /-------------------------------------------*/}

          <label htmlFor="scas-approval">
            <input type="checkbox" id="scas-approval" onChange={this.checkboxOnChange} />
            SCAS approved
          </label>
          {/* ------------------/ FILE UPLOAD /-------------------------------------------*/}
          {/* <input
            type="file"
            ref={this.fileInputRef}
            accept="image/*"
            onChange={this.fileOnChangeHandler}
            id="upload"
          /> */}
          <button type="submit">Create tour</button>
        </form>
      </div>
    );
  }
}

export default TourCreatorForm;
