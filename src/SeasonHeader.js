import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './SeasonHeader.scss'

import TOS_Seasons from './TOS/TOS_Seasons.js'
import TNG_Seasons from './TNG/TNG_Seasons.js'
import DS9_Seasons from './DS9/DS9_Seasons.js'
import VOY_Seasons from './VOY/VOY_Seasons.js'

function ShowHeader() {
  return (
    <Switch>
      <Route path="/TOS" component={TOS_Seasons} />
      <Route path="/TNG" component={TNG_Seasons} />
      <Route path="/DS9" component={DS9_Seasons} />
      <Route path="/VOY" component={VOY_Seasons} />
    </Switch>
  );
}

export default ShowHeader;
