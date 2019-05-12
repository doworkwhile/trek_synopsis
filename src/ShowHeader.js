import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TrekLink from './TrekLink.js'

import "./ShowHeader.scss"

function ShowHeader() {
  return (
    <Switch>
      <Route to="/" render={() => { return (
        <header>
          <TrekLink to="/" className="home" text="Synopsis Home" />
          <TrekLink to="/TOS" className="tos" text="TOS: The Original Series" />
          <TrekLink to="/TNG" className="tng" text="TNG: The Next Generation" />
          <TrekLink to="/DS9" className="ds9" text="DS9: Deep Space 9" />
          <TrekLink to="/VOY" className="voy" text="VOY: Voyager" />
        </header>
      )}} />
    </Switch>
  );
}

export default ShowHeader;
