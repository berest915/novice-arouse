import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6rem 0;
  transition: all 0.4s ease;
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

  @media (max-width: 700px) {
    padding: 4rem 0;
    transition: all 0.4s ease;
    .title {
      margin-bottom: 2rem;
    }
    .stacks {
      flex-wrap: wrap;

      .stack {
        padding: 0;
        width: 40%;
        height: 120px;
        margin: 10px;
      }
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 1.5rem;
      transition: all 0.4s ease;
    }
    .stacks > .stack {
      width: 80%;
      border-bottom: 1px solid silver;
    }
  }
`;
