import { colors } from 'src/assets/colorsToken';
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
  display: flex;
  justify-content: space-between;
  padding: 16px 48px;
  gap: 40px;
  color: ${colors.gray};
  & h1 {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 16px;

  }
`

export const CityLabel = styled.span `
  font-weight: bold;
  display: flex;
  align-items: center;
  gap:4px;
  margin-right:6px;
`

export const DescriptionsContainer = styled.div ``
export const ValueContainer = styled.div ``

export const MoreDetails = styled.div``;
export const LabelMoreDetails = styled.label<{color: string}>`
  font-weight:700;
  color: ${({color}) => color};
`
export const ListMoreDetails = styled.ul `
  padding-left: 0;
`
export const ItenListMoreDetails = styled.li `
  list-style-type: none;
  display:flex;
  align-items: center;
  gap: 4px;
`
export const TextMoreDetails = styled.p ``