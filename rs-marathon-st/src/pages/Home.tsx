import React from 'react';
import CardList from '../components/CardsList';

import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "testName"
    }
    console.log(props);
  }

click(){
  this.setState{
    { name: "Slava"}
   
  }
}


inputHandler(){
  set
}
  render() {


    return (
      <div className="home-container">
        <h1>Home page</h1>
        {blah}
        <input type="text" onChange={this.inputHandler} placeholder="Search" />
        <button onClick={this.click}></button>
        <CardList />
      </div>
    );
  }
}

export default Home;
