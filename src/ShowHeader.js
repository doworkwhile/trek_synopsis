import React from 'react';
import { Link } from 'react-router-dom'

import "./ShowHeader.scss"

function ShowHeader() {
  return (
    <header>
      <div className="show_header--link_container">
        <Link to="/" className="show_header--link home">Synopsis Home</Link>
      </div>
      <div className="show_header--link_container">
        <Link to="/TOS" className="show_header--link tos">TOS: The Original Series</Link>
      </div>
      <div className="show_header--link_container">
        <Link to="/TNG" className="show_header--link tng">TNG: The Next Generation</Link>
      </div>
      <div className="show_header--link_container">
        <Link to="/DS9" className="show_header--link ds9">DS9: Deep Space 9</Link>
      </div>
      <div className="show_header--link_container">
        <Link to="/VOY" className="show_header--link voy">VOY: Voyager</Link>
      </div>
    </header>
  );
}

export default ShowHeader;
