import React from "react";
import styled from "styled-components";
import { GFont_JetBrains_Mono_500_800 } from "../../css-constants/css-constants"

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
    ${GFont_JetBrains_Mono_500_800};
    font-weight: 800;
    color: var(--LogoText-font-color);
    margin-bottom: 3rem;
  }
`;
