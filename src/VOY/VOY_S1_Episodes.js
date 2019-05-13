import React from 'react';
import { Switch, Route } from 'react-router-dom';

function VOY_S1_Episodes() {
  return (
    <Switch>
      <Route path="/VOY/S1/1" render={() => (<span>
While searching for a missing Maquis ship with a Starfleet prisoner aboard,
USS Voyager is swept away to the Delta Quadrant, more than 70,000 light-years
from home, by an incredibly powerful being known as the "Caretaker."
      </span>)} />
      <Route path="/VOY/S1/3" render={() => (<span>
Voyager is trapped in a quantum singularity's event horizon, and Captain
Janeway must decide between Lt. Carey and former Maquis B'Elanna Torres to
be the new chief engineer.
      </span>)} />
      <Route path="/VOY/S1/4" render={() => (<span>
Investigating a planet just devastated by a polaric explosion, Janeway and
Paris are engulfed by a subspace fracture and transported in time to before
the accident.
      </span>)} />
      <Route path="/VOY/S1/5" render={() => (<span>
An organ-harvesting species known as the Vidiians steal Neelix's lungs,
leaving him to die.
      </span>)} />
      <Route path="/VOY/S1/6" render={() => (<span>
The crew enter a nebula to collect samples before realizing it is a living
organism, and not before doing it an injury.
      </span>)} />
      <Route path="/VOY/S1/7" render={() => (<span>
A micro-wormhole is discovered that leads to the Alpha Quadrant, and the crew
make contact with a Romulan ship on the other side.
      </span>)} />
      <Route path="/VOY/S1/8" render={() => (<span>
Tom Paris is convicted of murder on an alien world, and his punishment is to
witness the murder from the victim's perspective every 14 hours.
      </span>)} />
      <Route path="/VOY/S1/9" render={() => (<span>
Harry Kim is transported to an alien world at the same time as a dead woman's
body arrives on Voyager.
      </span>)} />
      <Route path="/VOY/S1/10" render={() => (<span>
A race that could shorten Voyager's journey with a transportation device will
not share its technology.
      </span>)} />
      <Route path="/VOY/S1/11" render={() => (<span>
Janeway and the other senior officers attempt to flush out a spy who is
sending information to the Kazon..
      </span>)} />
      <Route path="/VOY/S1/12" render={() => (<span>
The holographic doctor must rescue crew members who were turned to light
energy in a Holodeck simulation of Beowulf.
      </span>)} />
      <Route path="/VOY/S1/13" render={() => (<span>
A shuttlecraft with Chakotay and Tuvok aboard is attacked; Chakotay is left
brain-dead, while Tuvok begins acting strangely. An unknown force begins
controlling crewmembers.
      </span>)} />
      <Route path="/VOY/S1/14" render={() => (<span>
B'Elanna Torres is split into her human and Klingon halves by the Vidiians.
      </span>)} />
      <Route path="/VOY/S1/15" render={() => (<span>
A member of the Haakonians, a race warring with the Talaxians, arrives on
Voyager, much to the dismay of Neelix, whose family were killed by a weapon
of mass destruction this particular individual devised.
      </span>)} />
      <Route path="/VOY/S1/16" render={() => (<span>
Tuvok trains several Maquis members who have not fully integrated into the
Voyager crew.
      </span>)} />
    </Switch>
  );
}

export default VOY_S1_Episodes;