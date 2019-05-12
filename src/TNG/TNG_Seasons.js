import React from 'react';
import { Link } from 'react-router-dom';

function TNG_Seasons() {
  return (
    <div className='seasons tng'>
      <Link to="/TNG/S1">Season 1</Link>
      <Link to="/TNG/S2">Season 2</Link>
      <Link to="/TNG/S3">Season 3</Link>
      <Link to="/TNG/S4">Season 4</Link>
      <Link to="/TNG/S5">Season 5</Link>
      <Link to="/TNG/S6">Season 6</Link>
      <Link to="/TNG/S7">Season 7</Link>
    </div>
  );
}

export default TNG_Seasons;