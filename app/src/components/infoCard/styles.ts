import { colors } from 'src/assets/colorsToken';
import styled from 'styled-components';

export const InforCardContainer = styled.div`
  border-radius: 8px;
  border:1px solid ${colors.ligthGrey};
  overflow: hidden;
  min-height: 300px;
  position:relative;
  z-index:1;
`
export const BodyContainer = styled.div`
  background-color: ${colors.white};
  padding: 16px;
`

export const TileContainer = styled.div `
  display:flex;
  align-items:center;
  justify-content: space-between;
`

export const Price = styled.span<{colorText: string}> `
  color: ${({colorText}) => colorText};
  font-weight: 600;
  font-size:1.5rem;

  @media (max-width: 768px) {
    font-size:1rem;

  }
`

export const ListInfoContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  gap: 24px;
`
export const ItemList = styled.li<{isBold?: boolean}>`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: ${({isBold}) => isBold ? 'bold': '100'};
`

export const LinkButton = styled.button<{colorText: string}>`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 8px 0;
  color: ${({colorText}) => colorText};
  cursor: pointer;
`