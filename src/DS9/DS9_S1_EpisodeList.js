import React from 'react';
import TrekLink from '../TrekLink.js'

function DS9_S1_EpisodeList() {
  return (
    <div className='episodes ds9'>
      <div>
        <TrekLink to="/DS9/S1/1" epNum="1/2" text="Emissary" />
        <TrekLink to="/DS9/S1/3" epNum="3" text="Past Prologue" />
        <TrekLink to="/DS9/S1/4" epNum="4" text="A Man Alone" />
        <TrekLink to="/DS9/S1/5" epNum="5" text="Babel" />
        <TrekLink to="/DS9/S1/6" epNum="6" text="Captive Pursuit" />
        <TrekLink to="/DS9/S1/7" epNum="7" text="Q-Less" />
        <TrekLink to="/DS9/S1/8" epNum="8" text="Dax" />
        <TrekLink to="/DS9/S1/9" epNum="9" text="The Passenger" />
        <TrekLink to="/DS9/S1/10" epNum="10" text="Move Along Home" />
        <TrekLink to="/DS9/S1/11" epNum="11" text="The Nagus" />
        <TrekLink to="/DS9/S1/12" epNum="12" text="Vortex" />
        <TrekLink to="/DS9/S1/13" epNum="13" text="Battle Lines" />
        <TrekLink to="/DS9/S1/14" epNum="14" text="The Storyteller" />
        <TrekLink to="/DS9/S1/15" epNum="15" text="Progress" />
        <TrekLink to="/DS9/S1/16" epNum="16" text="If Wishes Were Horses" />
        <TrekLink to="/DS9/S1/17" epNum="17" text="The Forsaken" />
        <TrekLink to="/DS9/S1/18" epNum="18" text="Dramatis Personae" />
        <TrekLink to="/DS9/S1/19" epNum="19" text="Duet" />
        <TrekLink to="/DS9/S1/20" epNum="20" text="In the Hands of the Prophets" />
      </div>
    </div>
  );
}

export default DS9_S1_EpisodeList;