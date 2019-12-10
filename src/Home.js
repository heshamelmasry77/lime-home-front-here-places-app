import React from 'react';
import {Component} from 'react';
import HotelsMap from "./Shared/HotelsMap/HotelsMap";
import {geolocated} from "react-geolocated";
import Spinner from "./Shared/Spinner/Spinner";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleCardClick = this.handleCardClick.bind(this);
    this.state = {
      spinner: true
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // console.log('Home page');
    // console.log(process.env.REACT_APP_APP_ID);
    // console.log(this.props.isGeolocationAvailable)
    if (this.props.isGeolocationAvailable) {
      this.setState({spinner: false})
    }
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="Home">
        <HotelsMap location={this.props.coords}/>
      </div>
    ) : (
      <Spinner/>
    );

  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);
