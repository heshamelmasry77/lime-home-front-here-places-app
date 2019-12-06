import React from 'react';
import {Component} from 'react';
import HotelsMap from "./Shared/HotelsMap/HotelsMap";
import {geolocated} from "react-geolocated";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('Home page');
    console.log(process.env.REACT_APP_APP_ID);
    if (this.props.isGeolocationAvailable) {
      console.log(this.props.coords)
    }
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="Home">
        <p>home page </p>
        <HotelsMap location={this.props.coords}/>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );

  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);
