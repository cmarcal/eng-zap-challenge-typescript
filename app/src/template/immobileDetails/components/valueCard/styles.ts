import { colors } from 'src/assets/colorsToken';
import styled from 'styled-components';

export const CardContainer = styled.div `
  border-radius: 8px;
  border:1px solid ${colors.gray};
  padding:16px;
  width: 230px;
  position: sticky;
  top: 30px;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    width: 100%;
    border: none;
    border-top:1px solid ${colors.gray};
    border-bottom:1px solid ${colors.gray};
    border-radius: 0;
  }
`
export const RentalContainer = styled.div`
`

export const ListPayments = styled.ul `
  padding-left:0;
`
export const ItensPayments = styled.li<{isBold?: boolean, lastElemt?: boolean}>`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${({isBold}) => isBold ? 'bold' : 500};
  margin: 6px 0;

  ${({lastElemt}) => lastElemt &&
    `
      margin: 12px 0;
      border-top:1px dashed ${colors.gray};
      padding-top:4px;
    `
  }

`

export const SalesContainer = styled.div``

export const HeaderSalesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ValueHeaderSalesContainer = styled.span`
  margin-top:6px;
  font-weight: bold;
  font-size:1.2rem;
`