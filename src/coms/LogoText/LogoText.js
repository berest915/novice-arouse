import React from "react";
import styled from "styled-components";

const LogoText = () => {
  return (
    <>
      <Wrapper>
        <div className="logo-text">
          <p>SAn</p>
          <p>LEOW</p>
        </div>
      </Wrapper>
    </>
  );
};

export default LogoText;

const Wrapper = styled.div`
  .logo-text {
    font-family: "JetBrains Mono", monospace;
    font-weight: 800;
    margin-bottom: 3rem;
  }
`;
