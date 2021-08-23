import { colors } from '../../assets/colorsToken';
import styled from 'styled-components';

export const heightHeader = '60px';

export const HeaderContainer = styled.header<{isHome: boolean}>`

  ${({isHome}) => isHome && 
  ` position: absolute;
    top: 0;
  `    
  }
  background-color: ${colors.opacityGray};
  height: ${heightHeader};
  padding: 0 48px;
  display: flex;
  align-items: center;
  width:100%;
  z-index:2;
  justify-content: space-between;

  & img {
    cursor: pointer;
  }
 
  @media (max-width:768px) {
    padding: 8px 32px;

    & img {
      width:30%;
    }
  }
`
export const NavigationContainer = styled.ul `
  padding-left:0;
  display: flex;
  gap: 24px;
`
export const NavigationItens = styled.li<{colorText: string}> `
  list-style-type: none;
  cursor: pointer;
  font-size: 1.25rem;
  &:hover {
    color: ${({colorText}) => colorText}
  }
`