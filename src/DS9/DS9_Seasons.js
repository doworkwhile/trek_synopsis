import React from 'react';
import TrekLink from '../TrekLink.js'

function DS9_Seasons() {
  return (
    <div className='seasons ds9'>
      <TrekLink to="/DS9/S1" text="Season 1" />
      <TrekLink to="/DS9/S2" text="Season 2" />
      <TrekLink to="/DS9/S3" text="Season 3" />
      <TrekLink to="/DS9/S4" text="Season 4" />
      <TrekLink to="/DS9/S5" text="Season 5" />
      <TrekLink to="/DS9/S6" text="Season 6" />
      <TrekLink to="/DS9/S7" text="Season 7" />
    </div>
  );
}

export default DS9_Seasons;