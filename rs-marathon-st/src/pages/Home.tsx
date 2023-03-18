import React from 'react';
import CardList from '../components/CardsList';

import './home.scss';

//НУЖНО ЛИ ДЕЛАТЬ ПУСТЫЕ ПРОПС ДЛЯ ТИПИЗАЦИИ?

class Home extends React.Component<{}, { value: string | null }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      value: '',
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e: React.FormEvent) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }

  componentDidMount() {
    const keyInput = localStorage.getItem('key');
    this.setState({ value: keyInput });
  }

  componentWillUnmount() {
    console.log('unmounted');
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
        <CardList />
        {this.state.value}
      </div>
    );
  }
}

export default Home;
