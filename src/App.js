import React from 'react';
import { Footer, Navbar } from './Components';

import { RoutesComponent } from './Helpers/Routes';
import { UseAuthListener } from './Hooks';

export default function App() {
  const { user } = UseAuthListener();
  return (
    <div className="App">
      <Navbar user={user} />
      <RoutesComponent />
      <Footer />
    </div>
  );
}
