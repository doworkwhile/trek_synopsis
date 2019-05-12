import React from 'react';
import { Link } from 'react-router-dom';

function DS9_Seasons() {
  return (
    <div className='seasons ds9'>
      <Link to="/DS9/S1">Season 1</Link>
      <Link to="/DS9/S2">Season 2</Link>
      <Link to="/DS9/S3">Season 3</Link>
      <Link to="/DS9/S4">Season 4</Link>
      <Link to="/DS9/S5">Season 5</Link>
      <Link to="/DS9/S6">Season 6</Link>
      <Link to="/DS9/S7">Season 7</Link>
    </div>
  );
}

export default DS9_Seasons;