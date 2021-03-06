import React, {Component} from "react"
import './Cards.scss';
import PropTypes from "prop-types";
import {FaHotel} from 'react-icons/fa';
import {FiMapPin} from 'react-icons/fi';
import {FaCarSide} from 'react-icons/fa';

export default class Cards extends Component {

  handleCardHover(hotel) {
    this.props.onCardHover(hotel)
  }

  render() {
    const Card = ({hotel}) => {
      return (
        <a href={'#'} onMouseEnter={() => {
          this.handleCardHover(hotel)
        }}>
          {hotel.title && <h3>{hotel.title}</h3>}
          {hotel.category && <h4><FaHotel/> {hotel.category}</h4>}
          {hotel.distance && <h5><FaCarSide/> {hotel.distance}</h5>}
          {hotel.vicinity && <p><FiMapPin/> {hotel.vicinity}</p>}
        </a>
      );
    };
    return (
      <div className="Cards">
        <ul>
          {this.props.hotelsData.slice(3).map((hotel, index) => (
            <li key={index}>
              <Card hotel={hotel}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Cards.propTypes = {
  onCardHover: PropTypes.func
};
