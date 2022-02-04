import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background } from '../globalVar';
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
import * as ROUTES from '../../Constants/Routes';
import { FirebaseContext } from '../../Context/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SigninForm() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Firebase Work!
    const auth = getAuth();

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  const isInvalid = password === '' || emailAddress === '';

  return (
    <Background>
      <Container>
        <Title>Sign in</Title>

        <Base onSubmit={handleSignIn} method="POST">
          {error && <Error>{error}</Error>}
          <Input
            type="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Submit type="submit" disabled={isInvalid}>
            Sign in
          </Submit>
        </Base>

        <Text>
          New to Netflex?
          <Link to="../signup">Sign up now.</Link>
        </Text>
        <SmallText>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </SmallText>
      </Container>
    </Background>
  );
}
