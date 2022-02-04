import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import LogoImage from './logo.svg';
import { Button, Logo, Nav } from './style/Navbar';

export default function Navbar() {
  return (
    <Nav>
      <Link to={ROUTES.HOME}>
        <Logo src={LogoImage} alt="Logo" />
      </Link>
      <Link to={ROUTES.SIGNIN}>
        <Button>Sign in</Button>
      </Link>
    </Nav>
  );
}
