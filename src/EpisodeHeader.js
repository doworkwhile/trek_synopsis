import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TOS_S1_EpisodeList from './TOS/TOS_S1_EpisodeList.js';
import TOS_S2_EpisodeList from './TOS/TOS_S2_EpisodeList.js';
import TOS_S3_EpisodeList from './TOS/TOS_S3_EpisodeList.js';
import TNG_S1_EpisodeList from './TNG/TNG_S1_EpisodeList.js';
import TNG_S2_EpisodeList from './TNG/TNG_S2_EpisodeList.js';
import TNG_S3_EpisodeList from './TNG/TNG_S3_EpisodeList.js';
import TNG_S4_EpisodeList from './TNG/TNG_S4_EpisodeList.js';
import TNG_S5_EpisodeList from './TNG/TNG_S5_EpisodeList.js';
import TNG_S6_EpisodeList from './TNG/TNG_S6_EpisodeList.js';
import TNG_S7_EpisodeList from './TNG/TNG_S7_EpisodeList.js';
import VOY_S1_EpisodeList from './VOY/VOY_S1_EpisodeList.js';
import VOY_S2_EpisodeList from './VOY/VOY_S2_EpisodeList.js';
import VOY_S3_EpisodeList from './VOY/VOY_S3_EpisodeList.js';
import VOY_S4_EpisodeList from './VOY/VOY_S4_EpisodeList.js';
import VOY_S5_EpisodeList from './VOY/VOY_S5_EpisodeList.js';
import VOY_S6_EpisodeList from './VOY/VOY_S6_EpisodeList.js';
import VOY_S7_EpisodeList from './VOY/VOY_S7_EpisodeList.js';
import DS9_S1_EpisodeList from './DS9/DS9_S1_EpisodeList.js';
import DS9_S2_EpisodeList from './DS9/DS9_S2_EpisodeList.js';
import DS9_S3_EpisodeList from './DS9/DS9_S3_EpisodeList.js';
import DS9_S4_EpisodeList from './DS9/DS9_S4_EpisodeList.js';
import DS9_S5_EpisodeList from './DS9/DS9_S5_EpisodeList.js';
import DS9_S6_EpisodeList from './DS9/DS9_S6_EpisodeList.js';
import DS9_S7_EpisodeList from './DS9/DS9_S7_EpisodeList.js';

import './EpisodeHeader.scss'

function EpisodeHeader() {
  return (
    <div className="episodes--outer">
      <Switch>
        <Route path="/TOS/S1" component={TOS_S1_EpisodeList} />
        <Route path="/TOS/S2" component={TOS_S2_EpisodeList} />
        <Route path="/TOS/S3" component={TOS_S3_EpisodeList} />
        <Route path="/TNG/S1" component={TNG_S1_EpisodeList} />
        <Route path="/TNG/S2" component={TNG_S2_EpisodeList} />
        <Route path="/TNG/S3" component={TNG_S3_EpisodeList} />
        <Route path="/TNG/S4" component={TNG_S4_EpisodeList} />
        <Route path="/TNG/S5" component={TNG_S5_EpisodeList} />
        <Route path="/TNG/S6" component={TNG_S6_EpisodeList} />
        <Route path="/TNG/S7" component={TNG_S7_EpisodeList} />
        <Route path="/VOY/S1" component={VOY_S1_EpisodeList} />
        <Route path="/VOY/S2" component={VOY_S2_EpisodeList} />
        <Route path="/VOY/S3" component={VOY_S3_EpisodeList} />
        <Route path="/VOY/S4" component={VOY_S4_EpisodeList} />
        <Route path="/VOY/S5" component={VOY_S5_EpisodeList} />
        <Route path="/VOY/S6" component={VOY_S6_EpisodeList} />
        <Route path="/VOY/S7" component={VOY_S7_EpisodeList} />
        <Route path="/DS9/S1" component={DS9_S1_EpisodeList} />
        <Route path="/DS9/S2" component={DS9_S2_EpisodeList} />
        <Route path="/DS9/S3" component={DS9_S3_EpisodeList} />
        <Route path="/DS9/S4" component={DS9_S4_EpisodeList} />
        <Route path="/DS9/S5" component={DS9_S5_EpisodeList} />
        <Route path="/DS9/S6" component={DS9_S6_EpisodeList} />
        <Route path="/DS9/S7" component={DS9_S7_EpisodeList} />
      </Switch>
    </div>
  );
}

export default EpisodeHeader;
