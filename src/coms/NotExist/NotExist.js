import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { GFont_JetBrains_Mono_500_800 } from "../../css-constants/css-constants";
import { useHistory } from "react-router-dom";

const NotExist = () => {
  const history = useHistory();
  return (
    <>
      <Wrapper>
        <p className="bg-text">404</p>

        <Container>
          <p className="text">Page not found!</p>
          <Button
            onClick={() => history.push("/")}
            variant="contained"
            color="primary"
          >
            Back to Main
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default NotExist;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #cae5ff;
  position: relative;
  ${GFont_JetBrains_Mono_500_800}

  .bg-text {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: 14rem;
    font-weight: bold;
    opacity: 0.1;
    letter-spacing: 2rem;

    @media (max-width: 670px) {
      font-size: 11rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  font-size: 5rem;
  text-transform: uppercase;
  position: absolute;
  top: 46%;
  left: 60%;
  transform: translate(-60%, -46%);
  text-align: center;

  .text {
    opacity: 0.7;
  }

  .MuiButton-root {
    padding: 10px 20px;
    font-size: 1.1rem;
    transition: all 0.4s ease;
    background-color: #59619b;
    :hover {
      transform: scale(1.04);
    }
  }

  @media (max-width: 950px) {
    font-size: 4rem;
    top: 44%;
    left: 0%;
    transform: translate(-0%, -44%);
  }
  @media (max-width: 670px) {
    font-size: 3.3rem;
    top: 42%;
  }
  @media (max-width: 360px) {
    font-size: 2.7rem;
  }
`;
