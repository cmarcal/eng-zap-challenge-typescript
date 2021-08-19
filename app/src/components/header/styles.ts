import { colors } from '../../assets/colorsToken';
import styled from 'styled-components';

export const heightHeader = '50px';

export const HeaderContainer = styled.header`
  height: ${heightHeader};
  padding: 8px 16px;
  border-bottom:1px solid #ececec;
  background-color: ${colors.ligthGrey};
  display: flex;
  align-items: center;
`