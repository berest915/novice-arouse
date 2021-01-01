import React, { useContext } from "react";
import styled from "styled-components";
import { GFont_JetBrains_Mono_500_800 } from "../../css-constants/css-constants";
import i18next from "i18next";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import fontContext from "../../context/fontContext"

const LogoText = () => {
  const { t } = useTranslation();
  const { setCurrentLanguage } = useContext(fontContext)

  const switchLanguage = (lang) => {
    i18next.changeLanguage(lang)
    setCurrentLanguage(lang)
  }

  return (
    <>
      <Wrapper>
        <div className="logo-text">
          <p>SAn</p>
          <p>LEOW</p>
        </div>
        <div className="lang-btn">
          <Button onClick={() => switchLanguage('en')}>
            {t("english")}
          </Button>
          <Button onClick={() => switchLanguage('chi')}>
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
      :hover {
        background-color: #AEBBD6;
      transition: all .3s ease;
      }
    }
  }
`;
