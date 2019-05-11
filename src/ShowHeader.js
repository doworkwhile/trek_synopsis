import React from 'react';
import { Link } from 'react-router-dom'

import "./ShowHeader.scss"

function ShowHeader() {
  return (
    <header>
      <Link to="/" className="home">Synopsis Home</Link>
      <Link to="/TOS" className="tos">TOS: The Original Series</Link>
      <Link to="/TNG" className="tng">TNG: The Next Generation</Link>
      <Link to="/DS9" className="ds9">DS9: Deep Space 9</Link>
      <Link to="/VOY" className="voy">VOY: Voyager</Link>
    </header>
  );
}

export default ShowHeader;
