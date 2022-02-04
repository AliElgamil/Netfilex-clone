import React from 'react';
import { Footer, Navbar } from './Components';

import { RoutesComponent } from './Helpers/Routes';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesComponent />
      <Footer />
    </div>
  );
}
