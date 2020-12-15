import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.4s ease;
  .msg {
    padding:  5% ;transition: all 0.4s ease;
    font-family: "Cabin", sans-serif;
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 2px;

    p {
      margin-bottom: 0.7rem;

      span {
        letter-spacing: 1px;
        color: rgba(80, 80, 110, 0.7);
      }
    }
  }

  @media (max-width: 900px) {
    .msg {
      font-size: 2.3rem;
      line-height: 2.3rem;
      transition: all 0.4s ease;
      p{
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (max-width: 700px) {
    .msg {
      font-size: 1.7rem;
      line-height: 1.7rem;
      transition: all 0.4s ease;
    }
  }

  @media (max-width: 600px) {
    .msg {
      font-size: 1.3rem;
      letter-spacing: 3px;
      padding: 5% 3%;
    }
  }

  @media (max-width: 450px){
    .msg{
      padding: 2rem 5%;
      font-size: 1.1rem;
      p{
        margin-bottom: 0;
      }
    }
  }

`;
