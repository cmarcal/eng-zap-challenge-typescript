import styled from 'styled-components';

export const PaginationContainer = styled.ul `
  padding-left: 0;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0 ;
`
export const PaginationItem = styled.li<{colorText: string, activeItem: boolean}> `
  list-style-type: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({colorText, activeItem}) => activeItem ? colorText : '#333'};

  &:hover {
    color: ${({colorText}) => colorText}
  }
`