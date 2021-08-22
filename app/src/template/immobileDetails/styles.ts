import styled from 'styled-components';

export const DetailsContainer = styled.div `
  height: 100%;
`
export const SliderContainer = styled.div `
  height: 35%;
  overflow: hidden;
  &  div {
    height: 100% ;
  }
 
`;

export const BodyContainer = styled.div `
  display: table;
  height: 65%;
  padding: 16px 48px;
`

export const QuickInfosContainer = styled.ul `
  padding-left:0;
  display: flex;
  gap: 24px;
`
export const QuickItens = styled.li `
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
`