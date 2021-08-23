import styled from 'styled-components';

export const LinkButotnContainer  = styled.button<{color?: string}>`
  background-color: transparent;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  display:flex;
  align-items:center;
  gap: 8px;
  justify-content: center;
  padding: 0;
  &:hover {
    transition: 0.3s;
    color: ${({color}) => color}
  }
`