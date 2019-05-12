import React from 'react';
import TrekLink from '../TrekLink.js'

function VOY_S7_EpisodeList() {
  return (
    <div className='episodes voy'>
      <div>
        <TrekLink to="/VOY/S7/1" epNum="1" text="Unimatrix Zero, Part II" />
        <TrekLink to="/VOY/S7/2" epNum="2" text="Imperfection" />
        <TrekLink to="/VOY/S7/3" epNum="3" text="Drive" />
        <TrekLink to="/VOY/S7/4" epNum="4" text="Repression" />
        <TrekLink to="/VOY/S7/5" epNum="5" text="Critical Care" />
        <TrekLink to="/VOY/S7/6" epNum="6" text="Inside Man" />
        <TrekLink to="/VOY/S7/7" epNum="7" text="Body and Soul" />
        <TrekLink to="/VOY/S7/8" epNum="8" text="Nightingale" />
        <TrekLink to="/VOY/S7/9" epNum="9/10" text="Flesh and Blood" />
        <TrekLink to="/VOY/S7/11" epNum="11" text="Shattered" />
        <TrekLink to="/VOY/S7/12" epNum="12" text="Lineage" />
        <TrekLink to="/VOY/S7/13" epNum="13" text="Repentance" />
        <TrekLink to="/VOY/S7/14" epNum="14" text="Prophecy" />
        <TrekLink to="/VOY/S7/15" epNum="15" text="The Void" />
        <TrekLink to="/VOY/S7/16" epNum="16" text="Workforce, Part I" />
        <TrekLink to="/VOY/S7/17" epNum="17" text="Workforce, Part II" />
        <TrekLink to="/VOY/S7/18" epNum="18" text="Human Error" />
        <TrekLink to="/VOY/S7/19" epNum="19" text="Q2" />
        <TrekLink to="/VOY/S7/20" epNum="20" text="Author, Author" />
        <TrekLink to="/VOY/S7/21" epNum="21" text="Friendship One" />
        <TrekLink to="/VOY/S7/22" epNum="22" text="Natural Law" />
        <TrekLink to="/VOY/S7/23" epNum="23" text="Homestead" />
        <TrekLink to="/VOY/S7/24" epNum="24" text="Renaissance Man" />
        <TrekLink to="/VOY/S7/25" epNum="25/26" text="Endgame" />
      </div>
    </div>
  );
}

export default VOY_S7_EpisodeList;