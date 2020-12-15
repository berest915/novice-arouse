import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  font-family: "Cabin", sans-serif;
  .title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .stacks {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .stack {
      display: flex;
      flex-direction: column;
      align-items: center;

      .styled-icons {
        height: 5rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
