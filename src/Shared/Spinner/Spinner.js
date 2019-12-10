import React, {Component} from 'react';
import './Spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <div className="loader-container">
          <h4>Getting your location :) loading, please wait...</h4>
        </div>
      </div>
    );
  }
}

export default Spinner;
