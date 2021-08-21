import styled from 'styled-components';

export const TitleContainer = styled.h1<{size?: string}>`
  font-weight: 700;
  font-size: ${({size}) => size ? size : 'auto' };
`
export const SubTitleContainer = styled.h4`
  font-weight: 500;`
export const TextContainer = styled.p`
  padding:0 `