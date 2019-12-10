import React, {Component} from "react"
import {compose} from "recompose"
import './HotelMap.scss';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import axios from "axios";
import Cards from "../Cards/Cards";

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
  // console.log('props', props.location.latitude)
  // console.log('props', props.location.longitude)
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: props.location.latitude, lng: props.location.longitude}}>
      {props.markers.map((marker, index) => {
        const onClick = props.onClick.bind(this, marker);
        // console.log('marker', marker);
        let lat = marker.position ? marker.position[0] : null;
        let lng = marker.position ? marker.position[1] : null;
        // console.log(lat)
        // console.log(lng)
        // console.log(index);
        return (
          lat && lng &&
          <Marker
            key={index}
            onClick={onClick}
            position={{lat: lat, lng: lng}}
          >
            {props.selectedMarker === marker &&
            <InfoWindow>
              <div>
                {marker.title}
              </div>
            </InfoWindow>}
          </Marker>
        )
      })}
    </GoogleMap>
  )
});

export default class HotelsMap extends Component {
  constructor(props) {
    super(props);
    // this.handleCardClick = this.handleCardClick.bind(this);
    this.state = {
      hotelsData: [],
      selectedMarker: false
    }
  }

  componentDidMount() {
    // console.log(this.props);
    axios.get(`https://places.cit.api.here.com/places/v1/autosuggest?at=${this.props.location.latitude},${this.props.location.longitude}&q=hotels&app_id=${process.env.REACT_APP_APP_ID}&app_code=${process.env.REACT_APP_APP_CODE}
`)
      .then(response => {
        // console.log(response.data.results);
        // if (response.data.results.length !== 0) {
        this.setState({hotelsData: response.data.results}, () => {
          // console.log(this.state);
        });
        // }

      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = (marker, event) => {
    // console.log(marker);
    this.setState({selectedMarker: marker})
  };

  handleCardClick = (singleHotelData, event) => {
    this.setState({selectedMarker: singleHotelData});
    // console.log('singleHotelData: ', singleHotelData)
  };

  render() {
    const hotelsData = this.state.hotelsData;
    // console.log(hotelsData);
    return (
      <div className="HotelsMap">
        <h2 className="maps-header">Hotels Around!!</h2>
        <div className="map">
          <MapWithAMarker
            selectedMarker={this.state.selectedMarker}
            markers={this.state.hotelsData}
            onClick={this.handleClick}
            location={this.props.location}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_googleMap_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `calc(95vh - 25vh)`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
          />
        </div>
        {hotelsData.length > 0 && <Cards hotelsData={this.state.hotelsData} onCardClick={this.handleCardClick}/>}
      </div>
    )
  }
}
