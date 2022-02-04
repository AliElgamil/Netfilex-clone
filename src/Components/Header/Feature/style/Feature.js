import styled from 'styled-components';
import { media } from '../../../globalVar';

export const Container = styled.div`
  text-align: center;
  max-width: 640px;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0;

  ${media} {
    font-size: 35px;
  }
`;

export const SubTitle = styled.p`
  font-size: 26px;
  margin: 0;
  margin-top: 16px;
  ${media} {
    font-size: 18px;
  }
`;
