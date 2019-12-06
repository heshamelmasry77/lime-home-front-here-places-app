import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('Home page');
    console.log(process.env.REACT_APP_APP_ID);
    axios.get(`https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&q=hotels&app_id=${process.env.REACT_APP_APP_ID}&app_code=${process.env.REACT_APP_APP_CODE}
`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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
