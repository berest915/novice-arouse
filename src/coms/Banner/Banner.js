import React from "react";
import styled from "styled-components";

const Banner = ({textAlign, text}) => {
  return (
    <>
      <Wrapper textAlign={textAlign}>
        <p>{text}</p>
      </Wrapper>
    </>
  );
};

export default Banner;

const Wrapper = styled.div`
  color: rgba(0, 0, 0, .9);
  background-color: #e0fbfc;
  font-family: "Cabin", sans-serif;
  padding: .9rem;
  font-size: .9rem;
  opacity: 0.7;
  text-align: right;
  letter-spacing: 1px;
  text-align: ${props => props.textAlign};

  @media (max-width: 460px){
    font-size: .8rem;text-align:center;
  }
`;
