import React from "react";
import styled from "styled-components";
import { GFont_Cabin_600 } from "../../css-constants/css-constants";

const Loading = () => {
  return (
    <>
      <Wrapper>
        <Box>
          <div>L O A D I N G</div>
        </Box>
      </Wrapper>
    </>
  );
};

export default Loading;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #dcf0f9;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  color: #058A85;
  border-radius: 8%;
  padding: 2rem 3rem;
  font-size: 2rem;
  ${GFont_Cabin_600};
  position: absolute;
  top: 15%;
  left: 20%;

  @media (max-width: 450px) {
    font-size: 1.5rem;
    left: 8%;
  }
`;
