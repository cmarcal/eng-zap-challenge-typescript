import styled from 'styled-components';

export const heightHeader = '60px';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  height: ${heightHeader};
  padding: 0 48px;
  background-color: transparent;
  display: flex;
  align-items: center;
  width:100%;
  & img {
    width:10%;
  }
  @media (max-width:768px) {
    padding: 8px 32px;

    & img {
      width:30%;
    }
  }
`