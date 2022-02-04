import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  padding-left: 45px;
  padding-right: 45px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Logo = styled.img`
  width: 8.375rem;
  height: 2.25rem;
`;

export const Button = styled.button`
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  border: 0;
  color: #fff;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 16px;
`;
