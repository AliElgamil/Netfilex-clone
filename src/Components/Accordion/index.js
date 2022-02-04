import React, { useState } from 'react';

import faqsData from '../../fixtures/faqs.json';
import { OptForm } from '../';
import { Body, Container, Header, Inner, Item, Title } from './style/Accordion';

export default function Accordion() {
  const [toggleShow, setToggleShow] = useState([...faqsData]);

  const show = (e) => {
    let newToggleShow = [...toggleShow];

    newToggleShow[e.target.getAttribute('data-id')].open =
      !newToggleShow[e.target.getAttribute('data-id')].open;

    setToggleShow([...newToggleShow]);
  };

  return (
    <Container>
      <Title>Frequently Asked Question</Title>
      <Inner>
        {toggleShow.map((item) => {
          return (
            <Item key={item.id}>
              <Header onClick={show} data-id={item.id - 1}>
                {item.header}
                {toggleShow[item.id - 1].open ? (
                  <img src="/images/icons/close-slim.png" alt="close" />
                ) : (
                  <img src="/images/icons/add.png" alt="open" />
                )}
              </Header>
              <Body
                className={toggleShow[item.id - 1].open ? 'open' : 'closed'}
              >
                <span></span>
                {item.body}
                <span></span>
              </Body>
            </Item>
          );
        })}

        <OptForm />
      </Inner>
    </Container>
  );
}
