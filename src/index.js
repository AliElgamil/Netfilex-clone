import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';

import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import { app } from './Lib/firebace.prod';
import { FirebaseContext } from './Context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ app }}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
