import React from "react";
import styled from "styled-components";
import { GFont_JetBrains_Mono_500_800 } from "../../css-constants/css-constants";
import i18next from "i18next";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
const LogoText = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div className="logo-text">
          <p>SAn</p>
          <p>LEOW</p>
        </div>
        <div className="lang-btn">
          <Button onClick={() => i18next.changeLanguage("en")}>
            {t("english")}
          </Button>
          <Button onClick={() => i18next.changeLanguage("chi")}>
            {t("chinese")}
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default LogoText;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  .logo-text {
    display: inline-block;
    ${GFont_JetBrains_Mono_500_800};
    font-weight: 800;
    width: 50%;
    color: var(--LogoText-font-color);
  }

  .lang-btn {
    display: inline-block;
    width: 50%;
    text-align: right;
    .MuiButton-root {
      ${GFont_JetBrains_Mono_500_800};
      font-weight: 800;
    }
  }
`;
