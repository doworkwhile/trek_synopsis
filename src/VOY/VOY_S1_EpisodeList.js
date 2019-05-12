import React from 'react';
import TrekLink from '../TrekLink.js'

function VOY_S1_EpisodeList() {
  return (
    <div className='episodes voy'>
      <div>
        <TrekLink to="/VOY/S1/1" epNum="1/2" text="Caretaker" />
        <TrekLink to="/VOY/S1/3" epNum="3" text="Parallax" />
        <TrekLink to="/VOY/S1/4" epNum="4" text="Time and Again" />
        <TrekLink to="/VOY/S1/5" epNum="5" text="Phage" />
        <TrekLink to="/VOY/S1/6" epNum="6" text="The Cloud" />
        <TrekLink to="/VOY/S1/7" epNum="7" text="Eye of the Needle" />
        <TrekLink to="/VOY/S1/8" epNum="8" text="Ex Post Facto" />
        <TrekLink to="/VOY/S1/9" epNum="9" text="Emanations" />
        <TrekLink to="/VOY/S1/10" epNum="10" text="Prime Factors" />
        <TrekLink to="/VOY/S1/11" epNum="11" text="State of Flux" />
        <TrekLink to="/VOY/S1/12" epNum="12" text="Heroes and Demons" />
        <TrekLink to="/VOY/S1/13" epNum="13" text="Cathexis" />
        <TrekLink to="/VOY/S1/14" epNum="14" text="Faces" />
        <TrekLink to="/VOY/S1/15" epNum="15" text="Jetrel" />
        <TrekLink to="/VOY/S1/16" epNum="16" text="Learning Curve" />
      </div>
    </div>
  );
}

export default VOY_S1_EpisodeList;