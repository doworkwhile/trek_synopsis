import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import "./ShowHeader.scss"

function isActive(path) {
  if (path === '/' && window.location.pathname === '/') {
    return 'active'
  } else if (path !== '/' && window.location.pathname.includes(path)) {
    return 'active';
  } else {
    return '';
  }
}

function ShowHeader() {
  return (
    <Switch>
      <Route to="/" render={() => { return (
        <header>
          <Link to="/" className={"home " + isActive("/")}>Synopsis Home</Link>
          <Link to="/TOS" className={"tos " + isActive("/TOS")}>TOS: The Original Series</Link>
          <Link to="/TNG" className={"tng " + isActive("/TNG")}>TNG: The Next Generation</Link>
          <Link to="/DS9" className={"ds9 " + isActive("/DS9")}>DS9: Deep Space 9</Link>
          <Link to="/VOY" className={"voy " + isActive("/VOY")}>VOY: Voyager</Link>
        </header>
      )}} />
    </Switch>
  );
}

export default ShowHeader;
