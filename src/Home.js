import React from 'react';
import {Component} from 'react';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('Home page');
  }

  render() {
    return (
      <div className="Home">
        <p>home page </p>
      </div>
    );
  }
}

export default Home;
