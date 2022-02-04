import styled from 'styled-components';

export const bgColor = '#303030';

export const textColor = '#757575';

export const media = '@media (max-width: 600px)';

export const transition = (prop) =>
  `${prop} 0.25s cubic-bezier(0.5, 0, 0.1, 1)`;

export const Background = styled.div`
  min-height: calc(100vh + 8px);
  background: ${({ srcImage }) =>
      srcImage
        ? `url(../images/misc/${srcImage}.jpg) `
        : `url(../images/misc/home-bg.jpg)`}
    top left / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  border-bottom: 8px solid #222;
`;
