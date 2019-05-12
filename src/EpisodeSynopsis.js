import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TOS_S1_Episodes from './TOS/TOS_S1_Episodes.js'

function EpisodeSynopsis() {
  return (
    <Switch>
      <Route path="/TOS/S1" component={TOS_S1_Episodes} />
    </Switch>
  );
}

export default EpisodeSynopsis;