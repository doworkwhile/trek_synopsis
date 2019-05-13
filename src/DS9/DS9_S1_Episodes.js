import React from 'react';
import { Switch, Route } from 'react-router-dom';

function DS9_S1_Episodes() {
  return (
    <Switch>
      <Route path="/DS9/S1/1" render={() => (<span>
A new crew is assigned to a former Cardassian space station: Deep Space Nine.
It is a joint Federation/Bajoran force, with Commander Sisko in charge, but his
life is dramatically changed when he is declared the Emissary to the Prophets
by a Bajoran priest.
      </span>)} />
      <Route path="/DS9/S1/3" render={() => (<span>
A Bajoran terrorist with ties to Kira arrives on Deep Space Nine, however he is
pursued by the Cardassians. Garak is introduced.
      </span>)} />
      <Route path="/DS9/S1/4" render={() => (<span>
Odo is accused of the murder of a Bajoran murderer.
      </span>)} />
      <Route path="/DS9/S1/5" render={() => (<span>
A mysterious virus plagues the station, causing speech distortions and
eventually death.
      </span>)} />
      <Route path="/DS9/S1/6" render={() => (<span>
O'Brien befriends an alien from the Gamma Quadrant who is being hunted.
      </span>)} />
      <Route path="/DS9/S1/7" render={() => (<span>
Q and Vash arrive on Deep Space Nine. However, Vash has realized the annoyance
of Q and wants him to leave her alone.
      </span>)} />
      <Route path="/DS9/S1/8" render={() => (<span>
Jadzia Dax is accused of a murder committed by her symbiont in another lifetime.
      </span>)} />
      <Route path="/DS9/S1/9" render={() => (<span>
A sinister criminal is hiding in the mind of someone on Deep Space Nine,
but Bashir struggles to understand how it works.
      </span>)} />
      <Route path="/DS9/S1/10" render={() => (<span>
Quark is forced to play a game by the Wadi, a newly encountered species, and
the lives of the crew depend on the outcome.
      </span>)} />
      <Route path="/DS9/S1/11" render={() => (<span>
Quark is named as the head of the Ferengi Alliance by Grand Nagus Zek, but
he is now surrounded by enemies.
      </span>)} />
      <Route path="/DS9/S1/12" render={() => (<span>
Odo discovers he may not be the only one of his kind when a visitor from the
Gamma Quadrant claims he can contact Odo's people.
      </span>)} />
      <Route path="/DS9/S1/13" render={() => (<span>
The spiritual leader of Bajor, Kai Opaka, travels with Sisko on a trip to the
Gamma Quadrant but is stranded with him on a world where the dead are
resurrected.
      </span>)} />
      <Route path="/DS9/S1/14" render={() => (<span>
O'Brien is recruited to save a Bajoran village from destruction by a mysterious
cloud creature.
      </span>)} />
      <Route path="/DS9/S1/15" render={() => (<span>
Kira has to deal with a stubborn farmer (Brian Keith) who refuses to leave his
home even though it is slated for destruction.
      </span>)} />
      <Route path="/DS9/S1/16" render={() => (<span>
Deep Space Nine is put in jeopardy when the crew's thoughts manifest
themselves, and such figures as Rumpelstiltskin appear.
      </span>)} />
      <Route path="/DS9/S1/17" render={() => (<span>
The Federation ambassador from Betazed, Lwaxana Troi, visits the station,
and develops an affection for Odo.
      </span>)} />
      <Route path="/DS9/S1/18" render={() => (<span>
A Klingon ship comes through the wormhole and explodes. A mutiny is considered.
      </span>)} />
      <Route path="/DS9/S1/19" render={() => (<span>
A visiting Cardassian, Marritza, may in fact be the notorious war criminal
Gul Darhe'el, butcher of Gallitep Labor camp, and Kira is determined to bring him down.
      </span>)} />
      <Route path="/DS9/S1/20" render={() => (<span>
Friction escalates when Vedek Winn arrives on Deep Space Nine and discovers
schoolteacher Keiko O'Brien is teaching about aliens in the Bajoran wormhole.
      </span>)} />
    </Switch>
  );
}

export default DS9_S1_Episodes;