import { colors } from "src/assets/colorsToken";
import styled from "styled-components";
import { heightHeader } from "../header/styles";
export const Body = styled.div`
  height: calc(100vh - ${heightHeader});
  max-height: calc(100vh - ${heightHeader});
  overflow: auto;
  background-color: ${colors.ligthGrey}
`