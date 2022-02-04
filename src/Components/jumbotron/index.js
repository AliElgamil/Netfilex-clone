import React from 'react';
import jumboData from '../../fixtures/jumbo.json';
import {
  Image,
  Container,
  Inner,
  SubTitle,
  Title,
  Pane,
  Item,
} from './style/style';

export default function Jumbotron() {
  return (
    <Container>
      {jumboData.map((item) => (
        <Item key={item.id}>
          <Inner direction={item.direction}>
            <Pane>
              <Title> {item.title} </Title>
              <SubTitle> {item.subTitle} </SubTitle>
            </Pane>

            <Pane>
              <Image src={item.image} alt={item.alt} />
            </Pane>
          </Inner>
        </Item>
      ))}
    </Container>
  );
}
