import React from 'react';

import {
  Container,
  Row,
  Column,
  Title,
  Link,
  Text,
  Break,
} from './style/footer';

export default function Footer() {
  return (
    <Container>
      <Title>Question? Contact Us.</Title>
      <Break />

      <Row>
        <Column>
          <Link href="#">FAQ</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Speed Test</Link>
        </Column>

        <Column>
          <Link href="#">Help Center</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Cookie Preferences</Link>
          <Link href="#">Legal Notices</Link>
        </Column>

        <Column>
          <Link href="#">Account</Link>
          <Link href="#">Ways to Watch</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Only on Netflix</Link>
        </Column>

        <Column>
          <Link href="#">Media Center</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Contact Us</Link>
        </Column>
      </Row>

      <Break />

      <Text>Netflix Egypt</Text>
    </Container>
  );
}
