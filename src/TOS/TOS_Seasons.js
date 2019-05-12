import React from 'react';
import TrekLink from '../TrekLink.js'

function TOS_Seasons() {
  return (
    <div className='seasons tos'>
      <TrekLink to="/TOS/S1" text="Season 1" />
      <TrekLink to="/TOS/S2" text="Season 2" />
      <TrekLink to="/TOS/S3" text="Season 3" />
    </div>
  );
}

export default TOS_Seasons;