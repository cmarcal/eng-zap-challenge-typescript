import styled from 'styled-components';

export const CompanyContainer = styled.div`
  padding: 24px 48px;

`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (min-width: 768px) and ( max-width:1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FilterContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`