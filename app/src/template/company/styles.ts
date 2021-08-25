import styled from 'styled-components';

export const CompanyContainer = styled.div`
  padding: 12px 48px 24px 48px;
  & h4 {
    margin-top:0;
    text-align: left
  }
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
  position:relative;
  height: 300px;
	background-position: 0 91% ;
  background-size: cover;
  background-image: url('https://www.techrepublic.com/a/hub/i/r/2020/12/19/b7c2c7df-3634-4bee-ba70-a5c157cdc3b6/resize/1200x900/301059bf8d1b7a592ffaae45784f2466/zoom-vanit-janthra.jpg');
  background-repeat: no-repeat;
  opacity: 0.7;
 
`

export const BoxContainer = styled.div`
  text-align: right;
  margin-right: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin-top: -13%
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`