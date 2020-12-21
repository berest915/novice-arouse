import React from "react";
import styled from "styled-components";
import {GFont_Cabin_600  } from "../../css-constants/css-constants"

const Banner = ({ text }) => {
  return (
    <>
      <Wrapper>
        <p>{text}</p>
      </Wrapper>
    </>
  );
};

export default Banner;

const Wrapper = styled.div`
  color: rgba(0, 0, 0, 0.9);
  background-color: #e0fbfc;
  ${GFont_Cabin_600};
  padding: 0.9rem;
  font-size: 0.9rem;
  opacity: 0.7;
  text-align: right;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    transition: all 0.4s ease;
    text-align: center;
  }
  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;
