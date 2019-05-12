import React from 'react';
import TrekLink from '../TrekLink.js'

function VOY_Seasons() {
  return (
    <div className='seasons voy'>
      <TrekLink to="/VOY/S1" text="Season 1" />
      <TrekLink to="/VOY/S2" text="Season 2" />
      <TrekLink to="/VOY/S3" text="Season 3" />
      <TrekLink to="/VOY/S4" text="Season 4" />
      <TrekLink to="/VOY/S5" text="Season 5" />
      <TrekLink to="/VOY/S6" text="Season 6" />
      <TrekLink to="/VOY/S7" text="Season 7" />
    </div>
  );
}

export default VOY_Seasons;