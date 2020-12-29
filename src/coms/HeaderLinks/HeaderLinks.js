import React from "react";
import { Wrapper } from "./HeaderLinksStyles";
import { useTranslation } from 'react-i18next';
const HeaderLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div className="dir">
          <div className="border" />
          <div className="items">
            <div className="item">
              <a href="#" className="item__link">
                <i className="item__icon fab fa-github" />
                <span className="item__text">{t("repo")}</span>
              </a>
            </div>
            <div className="item">
              <a href="#" className="item__link">
                <i className="item__icon far fa-file-pdf" />
                <span className="item__text">{t("resume")}</span>
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HeaderLinks;
