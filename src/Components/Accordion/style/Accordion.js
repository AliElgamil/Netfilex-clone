import styled from 'styled-components/macro';
import { bgColor, media, transition } from '../../globalVar';

export const Container = styled.div`
  border-bottom: 8px solid #222;
  padding: 70px 5%;
`;

export const Inner = styled.div`
  display: flex;
  padding: 0px 45px;

  flex-direction: column;
  max-width: 812px;
  margin: auto;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 8px;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  background-color: ${bgColor};
  padding: 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    ${media} {
      width: 16px;
    }
  }

  ${media} {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 0 2.2em 0 1.2em;
  transform-origin: top;
  transition: ${transition('max-height')};

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: ${transition('max-height')};
  }
  &.open {
    max-height: 1200px;
    transition: ${transition('max-height')};
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;

  ${media} {
    font-size: 35px;
  }
`;
