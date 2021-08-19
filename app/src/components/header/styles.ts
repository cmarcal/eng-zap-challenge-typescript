import styled from 'styled-components';

export const heightHeader = '50px';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  height: ${heightHeader};
  padding: 8px 16px;
  background-color: transparent;
  display: flex;
  align-items: center;
  width:100%;
  & img {
    width:10%;
  }
  @media (max-width:768px) {
    & img {
      width:30%;
    }
  }
`