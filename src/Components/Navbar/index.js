import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import LogoImage from './logo.svg';
import { Button, Logo, Nav } from './style/Navbar';
// import SelectProfile from './SelectProfile/';

export default function Navbar({ user }) {
  return (
    <Nav>
      <Link to={ROUTES.HOME}>
        <Logo src={LogoImage} alt="Logo" />
      </Link>

      {user ? null : ( // <SelectProfile user={user} />
        <Link to={ROUTES.SIGNIN}>
          <Button>Sign in</Button>
        </Link>
      )}
    </Nav>
  );
}
