import styled from 'styled-components';

export const CarouselContainer = styled.div`
  & .carousel-status {
    display: none;
  }
  & .control-arrow .control-next:hover {
    position: relative;
    z-index:5;
  }
`