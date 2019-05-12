import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TOS_S1_Episodes from './TOS/TOS_S1_Episodes.js'



import './EpisodeSynopsis.scss'

function EpisodeSynopsis() {
  return (
    <div className="synopsis">
      <Switch>
        <Route path="/TOS/S1" component={TOS_S1_Episodes} />
      </Switch>
    </div>
  );
}

export default EpisodeSynopsis;