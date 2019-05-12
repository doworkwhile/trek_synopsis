import React from 'react';
import { Link } from 'react-router-dom';

function VOY_Seasons() {
  return (
    <div className='seasons voy'>
      <Link to="/VOY/S1">Season 1</Link>
      <Link to="/VOY/S2">Season 2</Link>
      <Link to="/VOY/S3">Season 3</Link>
      <Link to="/VOY/S4">Season 4</Link>
      <Link to="/VOY/S5">Season 5</Link>
      <Link to="/VOY/S6">Season 6</Link>
      <Link to="/VOY/S7">Season 7</Link>
    </div>
  );
}

export default VOY_Seasons;