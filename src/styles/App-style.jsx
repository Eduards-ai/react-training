import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  grid-template-areas:
    "h h"
    "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  /* grid-gap: 10px; */
`;