import React from 'react';
import TourCreatorForm from '../../components/TourCreatorForm/index';
import './style.scss';

type Data = { name: string; date: number }[];

class Form extends React.Component<unknown, { dataList: Data[] }> {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
  }
  render() {
    return <TourCreatorForm />;
  }
}

export default Form;
