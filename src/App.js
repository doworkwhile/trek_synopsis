import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ShowHeader from './ShowHeader.js'
import EpisodeHeader from './EpisodeHeader.js'
import EpisodeSynopsis from './EpisodeSynopsis.js'
import Footer from './Footer.js'

function App() {
  return (
    <BrowserRouter>
      <ShowHeader />
      <EpisodeHeader />
      <EpisodeSynopsis />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
