import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './SeasonHeader.scss'

import TOS_Seasons from './TOS/TOS_Seasons.js'
import TNG_Seasons from './TNG/TNG_Seasons.js'

function ShowHeader() {
  return (
    <Switch>
      <Route path="/TOS" component={TOS_Seasons} />
      <Route path="/TNG" component={TNG_Seasons} />
    </Switch>
  );
}

export default ShowHeader;
