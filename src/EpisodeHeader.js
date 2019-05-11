import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TOS_Episodes from './Episode_Headers/TOS_Episodes.js'
import TNG_Episodes from './Episode_Headers/TNG_Episodes.js'
import DS9_Episodes from './Episode_Headers/DS9_Episodes.js'
import VOY_Episodes from './Episode_Headers/VOY_Episodes.js'
import Home_Episodes from './Episode_Headers/Home_Episodes.js'

import './EpisodeHeader.scss'

function EpisodeHeader() {
  return (
    <Switch>
      <Route path="/TOS" component={TOS_Episodes} />
      <Route path="/TNG" component={TNG_Episodes} />
      <Route path="/DS9" component={DS9_Episodes} />
      <Route path="/VOY" component={VOY_Episodes} />
      <Route path="/" component={Home_Episodes} />
    </Switch>
  );
}

export default EpisodeHeader;
