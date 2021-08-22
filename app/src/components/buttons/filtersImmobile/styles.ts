import styled from 'styled-components';

export const GroupButtonContianer = styled.div``;

export const Buttons = styled.button`
  background-color: #04AA6D;
  border: 1px solid green; 
  color: white; 
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
    background-color: #3e8e41;
  }
`;