import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TOS_S1_EpisodeList from './TOS/TOS_S1_EpisodeList.js'
import TOS_S2_EpisodeList from './TOS/TOS_S2_EpisodeList.js'
import TOS_S3_EpisodeList from './TOS/TOS_S3_EpisodeList.js'
import TNG_S1_EpisodeList from './TNG/TNG_S1_EpisodeList.js'

import './EpisodeHeader.scss'

function EpisodeHeader() {
  return (
    <Switch>
      <Route path="/TOS/S1" component={TOS_S1_EpisodeList} />
      <Route path="/TOS/S2" component={TOS_S2_EpisodeList} />
      <Route path="/TOS/S3" component={TOS_S3_EpisodeList} />
      <Route path="/TNG/S1" component={TNG_S1_EpisodeList} />
    </Switch>
  );
}

export default EpisodeHeader;
