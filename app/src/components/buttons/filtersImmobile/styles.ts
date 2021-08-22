import { colors } from 'src/assets/colorsToken';
import styled from 'styled-components';

export const GroupButtonContianer = styled.div`
  & button:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  & button:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Buttons = styled.button<{color: string, isActive: boolean;}>`
  background-color: ${({color, isActive}) => isActive ? color : colors.white};
  font-size: 1rem;
  border: 1px solid ${({color}) => color}; 
  color: ${({color, isActive}) => isActive ? colors.white: color }; 
  padding: 10px 24px; 
  cursor: pointer; 
  float: left;
  
  &::after {
    content: "";
    clear: both;
    display: table;
  }

  &:not(:last-child) {
    border-right: none; 
  }

  &:hover {
    transition: 0.3s;
    background-color: ${({color}) => color};
    color: ${colors.white};
  }
`;