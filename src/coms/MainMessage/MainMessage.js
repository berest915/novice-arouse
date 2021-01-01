import React, { useContext } from "react";
import { Wrapper } from "./MainMessageStyles";
import { useTranslation } from "react-i18next";
import fontContext from "../../context/fontContext"
const MainMessage = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useContext(fontContext)

  return (
    <>
      <Wrapper>
        <div className={`msg ${currentLanguage === 'chi' && `chi-lang`}`}>
          <p>
            {t("mainMessage.1")}
            <span>{t("mainMessage.2")}</span>
          </p>
          <p>
            <span>{t("mainMessage.3")}</span>
            {t("mainMessage.4")}
          </p>
          <p>
            {t("mainMessage.5")}
            <span>{t("mainMessage.6")}</span>
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default MainMessage;
