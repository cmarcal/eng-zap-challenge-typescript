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
 
  @media (max-width:768px) {
    padding: 8px 32px;

    & img {
      width:30%;
    }
  }
`