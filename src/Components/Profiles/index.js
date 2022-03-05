import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Container,
  List,
  Name,
  Title,
  Picture,
  Item,
} from './style/SelectProfile';

export default function SelectProfile({ user }) {
  const [profle, setProfle] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(user.photoUR);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profle.displayName]);

  return (
    <Container>
      <Title>Who's watching?</Title>
      <List>
        <Item>
          {/* <Picture src={user.photoURL} alt="Profile image" /> */}
          {loading ? (
            <img src="images/misc/loading.gif" alt="Loading" />
          ) : (
            <Picture
              src={`images/users/${user.photoURL}.png`}
              alt="Profile image"
            />
          )}
          <Name>{user.displayName}</Name>
        </Item>
      </List>
    </Container>
  );
}
