import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TOS_S1_Episodes from './TOS/TOS_S1_Episodes.js'
import TOS_S2_Episodes from './TOS/TOS_S2_Episodes.js'
import TOS_S3_Episodes from './TOS/TOS_S3_Episodes.js'
import TNG_S1_Episodes from './TNG/TNG_S1_Episodes.js'
import TNG_S2_Episodes from './TNG/TNG_S2_Episodes.js'
import TNG_S3_Episodes from './TNG/TNG_S3_Episodes.js'
import TNG_S4_Episodes from './TNG/TNG_S4_Episodes.js'
import TNG_S5_Episodes from './TNG/TNG_S5_Episodes.js'
import TNG_S6_Episodes from './TNG/TNG_S6_Episodes.js'
import TNG_S7_Episodes from './TNG/TNG_S7_Episodes.js'
import DS9_S1_Episodes from './DS9/DS9_S1_Episodes.js'
import DS9_S2_Episodes from './DS9/DS9_S2_Episodes.js'
import DS9_S3_Episodes from './DS9/DS9_S3_Episodes.js'
import DS9_S4_Episodes from './DS9/DS9_S4_Episodes.js'
import DS9_S5_Episodes from './DS9/DS9_S5_Episodes.js'
import DS9_S6_Episodes from './DS9/DS9_S6_Episodes.js'
import DS9_S7_Episodes from './DS9/DS9_S7_Episodes.js'
import VOY_S1_Episodes from './VOY/VOY_S1_Episodes.js'
import VOY_S2_Episodes from './VOY/VOY_S2_Episodes.js'
import VOY_S3_Episodes from './VOY/VOY_S3_Episodes.js'
import VOY_S4_Episodes from './VOY/VOY_S4_Episodes.js'
import VOY_S5_Episodes from './VOY/VOY_S5_Episodes.js'
import VOY_S6_Episodes from './VOY/VOY_S6_Episodes.js'
import VOY_S7_Episodes from './VOY/VOY_S7_Episodes.js'

import './EpisodeSynopsis.scss'

function EpisodeSynopsis() {
  return (
    <div className="synopsis">
      <div>
        <Switch>
          <Route path="/TOS/S1" component={TOS_S1_Episodes} />
          <Route path="/TOS/S2" component={TOS_S2_Episodes} />
          <Route path="/TOS/S3" component={TOS_S3_Episodes} />
          <Route path="/TNG/S1" component={TNG_S1_Episodes} />
          <Route path="/TNG/S2" component={TNG_S2_Episodes} />
          <Route path="/TNG/S3" component={TNG_S3_Episodes} />
          <Route path="/TNG/S4" component={TNG_S4_Episodes} />
          <Route path="/TNG/S5" component={TNG_S5_Episodes} />
          <Route path="/TNG/S6" component={TNG_S6_Episodes} />
          <Route path="/TNG/S7" component={TNG_S7_Episodes} />
          <Route path="/DS9/S1" component={DS9_S1_Episodes} />
          <Route path="/DS9/S2" component={DS9_S2_Episodes} />
          <Route path="/DS9/S3" component={DS9_S3_Episodes} />
          <Route path="/DS9/S4" component={DS9_S4_Episodes} />
          <Route path="/DS9/S5" component={DS9_S5_Episodes} />
          <Route path="/DS9/S6" component={DS9_S6_Episodes} />
          <Route path="/DS9/S7" component={DS9_S7_Episodes} />
          <Route path="/VOY/S1" component={VOY_S1_Episodes} />
          <Route path="/VOY/S2" component={VOY_S2_Episodes} />
          <Route path="/VOY/S3" component={VOY_S3_Episodes} />
          <Route path="/VOY/S4" component={VOY_S4_Episodes} />
          <Route path="/VOY/S5" component={VOY_S5_Episodes} />
          <Route path="/VOY/S6" component={VOY_S6_Episodes} />
          <Route path="/VOY/S7" component={VOY_S7_Episodes} />
        </Switch>
      </div>
    </div>
  );
}

export default EpisodeSynopsis;