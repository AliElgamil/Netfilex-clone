import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background } from '../globalVar';
import * as ROUTES from '../../Constants/Routes';
// import { FirebaseContext } from '../../Context/firebase';
import {
  Base,
  Container,
  Error,
  Input,
  Title,
  Text,
  Link,
  SmallText,
  Submit,
} from './style/Form';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

export default function SignupForm() {
  const navigate = useNavigate();
  // const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = (e) => {
    e.preventDefault();

    // Firebase Work!
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: firstName,
          photoURL: `images/users/${Math.floor(Math.random() * 6)}.png`,
        });
      })
      .then(() => {
        navigate(`../${ROUTES.BROSE}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(errorMessage);
      });
  };

  return (
    <Background>
      <Container>
        <Title> Sign up </Title>
        <Base onSubmit={handleSignUp} method="POST">
          {' '}
          {error && <Error> {error} </Error>}{' '}
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />{' '}
          <Input
            type="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />{' '}
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />{' '}
          <Submit type="submit" disabled={isInvalid}>
            Sign up{' '}
          </Submit>{' '}
        </Base>
        <Text>
          New to Netflex ?<Link to="/signin"> Sign in now. </Link>{' '}
        </Text>{' '}
        <SmallText>
          This page is protected by Google reCAPTCHA to ensure you 're not a
          bot. Learn more.{' '}
        </SmallText>{' '}
      </Container>{' '}
    </Background>
  );
}
