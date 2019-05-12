import React from 'react';
import { Link } from 'react-router-dom';

function TOS_Seasons() {
  return (
    <div className='seasons tos'>
      <Link to="/TOS/S1">Season 1</Link>
      <Link to="/TOS/S2">Season 2</Link>
      <Link to="/TOS/S3">Season 3</Link>
    </div>
  );
}

export default TOS_Seasons;