import React from 'react';
import CardList from '../components/CardsList';
import data from '../data/data.json';
import './home.scss';

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
        <CardList data={this.state.dataList} />
      </div>
    );
  }
}

export default Home;
