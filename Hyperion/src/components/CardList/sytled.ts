import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: flex;

  gap: 20px;

  overflow-x: scroll;

  padding: 40px 0;

  @media (min-width: 660px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
