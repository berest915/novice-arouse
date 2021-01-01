import styled from "styled-components";
import { GFont_Cabin_600 } from "../../css-constants/css-constants";

export const Wrapper = styled.div`
  margin: 6rem auto;
  width: 100%;
  max-width: 1100px;
  text-align: center;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  ${GFont_Cabin_600};
  .title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .stacks {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    .stack {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 40px;

      .styled-icons {
        height: 5rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    margin: 4rem 0;
    transition: all 0.4s ease;
    .title {
      margin-bottom: 2rem;
    }
    .stacks > .stack {
      padding: 0;
      width: 40%;
      height: 100%;
      margin: 10px;
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

      span {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (max-width: 380px) {
    width: 100%;
    .title {
      font-size: 1.2rem;
    }
  }
`;
