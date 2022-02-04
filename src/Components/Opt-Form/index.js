import React from 'react';
import { Container, Input, Button, Text, Form } from './style/OptForm';

export default function OptForm() {
  return (
    <Container>
      <Text>
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
      <Form>
        <Input placeholder="Email address" />
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Get Started <img src="/images/icons/chevron-right.png" alt="Icon" />{' '}
        </Button>
      </Form>
    </Container>
  );
}
