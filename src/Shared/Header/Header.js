import React, {Component} from "react"
import './Header.scss';
import {FaBeer} from 'react-icons/fa';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li><span>Ala</span> See Hotels Around <FaBeer/></li>
        </ul>
      </div>
    )
  }
}
