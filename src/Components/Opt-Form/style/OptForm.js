import styled from 'styled-components';
import { media, transition } from '../../globalVar';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  height: 70px;
  border: 0;
  padding: 10px;

  @media (max-width: 1000px) {
    height: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  max-width: 250px;
  border: 0;
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  font-size: 26px;
  cursor: pointer;
  transition: ${transition('background-color')};

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
    font-size: 16px;
    height: 50px;
    max-width: 200px;
    font-weight: bold;
  }

  img {
    filter: brightness(0) invert(1);
    margin-left: 10px;
    width: 18px;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;

  ${media} {
    font-size: 16px;
    line-height: 22px;
  } ;
`;
