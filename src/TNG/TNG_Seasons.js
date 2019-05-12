import React from 'react';
import TrekLink from '../TrekLink.js'

function TNG_Seasons() {
  return (
    <div className='seasons tng'>
      <TrekLink to="/TNG/S1" text="Season 1" />
      <TrekLink to="/TNG/S2" text="Season 2" />
      <TrekLink to="/TNG/S3" text="Season 3" />
      <TrekLink to="/TNG/S4" text="Season 4" />
      <TrekLink to="/TNG/S5" text="Season 5" />
      <TrekLink to="/TNG/S6" text="Season 6" />
      <TrekLink to="/TNG/S7" text="Season 7" />
    </div>
  );
}

export default TNG_Seasons;