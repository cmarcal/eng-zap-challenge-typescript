import styled from 'styled-components'

export const QuickInfosContainer = styled.ul `
  padding-left:0;
  display: flex;
  gap: 24px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;

  }
`
export const QuickItens = styled.li `
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const CreatedAtLabel = styled.span `
  display: flex;
  align-items: center;
  gap:4px;
  margin-right:6px;
  font-size:0.85rem;
  margin: 8px 0;
`
