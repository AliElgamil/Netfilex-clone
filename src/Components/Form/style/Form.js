import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

const flex = `display: flex;
  flex-direction: column;`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 60px 68px 40px;
  max-width: 450px;
  margin: 100px 0;
`;

export const Error = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 15px 20px;
`;

export const Base = styled.form`
  ${flex}
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #737373;
  margin-top: 24px;
`;

export const SmallText = styled.p`
  font-size: 13px;
  margin-top: 10px;
  color: #8c8c8c;
  margin-bottom: 30px;
`;

export const Link = styled(ReachRouterLink)`
  color: white;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: 0;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  padding: 5px 20px;
  color: #fff;
  outline: 0;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background-color: #e50914;
  border-radius: 4px;
  font-size: 16px;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #fff;
  cursor: pointer;
  text-transform: capitalize;

  &:disabled {
    opacity: 0.5;
  }
`;
