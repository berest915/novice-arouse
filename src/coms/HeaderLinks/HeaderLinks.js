import React, { useContext, useEffect } from "react";
import { Wrapper } from "./HeaderLinksStyles";
import { useTranslation } from "react-i18next";
import fontContext from "../../context/fontContext";

const HeaderLinks = () => {
  const { t } = useTranslation();
  const { currentLanguage, setCurrentLanguage } = useContext(fontContext);

  useEffect(() => {
    // default LST key from i18next
    const LST = localStorage.getItem("i18nextLng");
    LST === "chi" && setCurrentLanguage("chi");

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper currentLanguage={currentLanguage}>
        <div className="dir">
          <div className="border" />
          <div className="items">
            <div className="item">
              <a
                href="https://github.com/berest915"
                target="_blank"
                rel="noreferrer"
                className="item__link"
              >
                <i className="item__icon fab fa-github" />
                <span className="item__text">{t("repo")}</span>
              </a>
            </div>
            <div className="item">
              <a
                href="https://github.com/berest915"
                target="_blank"
                rel="noreferrer"
                className="item__link"
              >
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
