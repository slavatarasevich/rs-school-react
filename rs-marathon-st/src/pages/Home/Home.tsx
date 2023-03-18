import React from 'react';
import CardsList from '../../components/CardsList';
import data from '../../mock/travel-data.json';
import './style.scss';

type Data = { img: string; title: string; price: number }[];

class Home extends React.Component<unknown, { value: string; dataList: Data }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      value: '',
      dataList: [],
    };
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  componentDidMount() {
    const keyInput = localStorage.getItem('keyInput');
    this.setState({ value: keyInput ?? '' });
    this.setState({ dataList: data });
  }

  componentWillUnmount() {
    localStorage.setItem('keyInput', this.state.value);
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <input
          type="text"
          onChange={this.inputHandler}
          value={this.state.value}
          placeholder="Search"
        />
        <CardsList data={this.state.dataList} />
      </div>
    );
  }
}

export default Home;
