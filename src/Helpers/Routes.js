import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import * as ROUTES from '../Constants/Routes';
import { Brose, Home, Signin, Signup } from '../Page';
import { UseAuthListener } from '../Hooks';

export function RoutesComponent() {
  const user = UseAuthListener();
  // const user = null;
  return (
    <>
      <Routes>
        <Route
          index
          element={
            !user ? (
              <Home user={user} />
            ) : (
              <Navigate from="/" to={ROUTES.BROSE} />
            )
          }
        />
        <Route
          path={ROUTES.BROSE}
          element={
            !user ? (
              <Navigate from={ROUTES.BROSE} to={`../${ROUTES.HOME}`} />
            ) : (
              <Brose user={user} />
            )
          }
        />
        <Route
          path={ROUTES.SIGNIN}
          element={
            !user ? (
              <Signin />
            ) : (
              <Navigate from={ROUTES.SIGNIN} to={`../${ROUTES.BROSE}`} />
            )
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            !user ? (
              <Signup />
            ) : (
              <Navigate from={ROUTES.SIGNUP} to={`../${ROUTES.BROSE}`} />
            )
          }
        />
      </Routes>
    </>
  );
}
