import React from 'react';
import { Background } from '../globalVar';
import { OptForm } from '../';
import Feature from './Feature';

export default function Header() {
  return (
    <Background srcImage="home-bg">
      <Feature />
      <OptForm />
    </Background>
  );
}
