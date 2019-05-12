import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ShowHeader from './ShowHeader.js'
import SeasonHeader from './SeasonHeader.js'
import EpisodeHeader from './EpisodeHeader.js'
import EpisodeSynopsis from './EpisodeSynopsis.js'
import Footer from './Footer.js'

function App() {
  return (
    <BrowserRouter>
      <ShowHeader />
      <hr />
      <SeasonHeader />
      <hr />
      <EpisodeHeader />
      <hr />
      <EpisodeSynopsis />
      <hr />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
