import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  } ;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type p {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.8rem;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
