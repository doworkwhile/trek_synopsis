import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './SeasonHeader.scss'

import TOS_Seasons from './TOS/TOS_Seasons.js'

function ShowHeader() {
  return (
    <Switch>
      <Route path="/TOS" component={TOS_Seasons} />
    </Switch>
  );
}

export default ShowHeader;
