import React, {Component} from "react"
import './Cards.scss';
import PropTypes from "prop-types";


export default class Cards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleCardClick(hotel) {
    // console.log(this.props);
    // console.log(hotel)
    this.props.onCardClick(hotel)
  }

  render() {
    const Card = ({hotel}) => {
      return (
        <a onClick={() => {
          this.handleCardClick(hotel)
        }}>
          {hotel.title && <h3><span>Title : </span>{hotel.title}</h3>}
          {hotel.category && <h4><span>category :</span> {hotel.category}</h4>}
          {hotel.distance && <h5><span>distance :</span> {hotel.distance}</h5>}
          {hotel.vicinity && <p>vicinity : {hotel.vicinity}</p>}
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
  onCardClick: PropTypes.func
};
