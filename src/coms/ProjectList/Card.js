import React, { useContext } from "react";
import { Wrapper, ImageDiv, ContentDiv } from "./ProjectListStyles";
import { useTranslation } from 'react-i18next';
import fontContext from "../../context/fontContext"
const Card = ({ card }) => {
  const { t } = useTranslation()
  const {currentLanguage} = useContext(fontContext)

  const {
    image,
    alt,
    title,
    p,
    stack,
    demoUrl,
    sourceUrl,
    isRowReverse,
  } = card;

  return (
    <Wrapper isRowReverse={isRowReverse} >
      <ImageDiv
        className="each-w"
        isRowReverse={isRowReverse}
        data-aos={isRowReverse ? `fade-left` : `fade-right`}
        data-aos-easing="ease-in-cubic"
      >
        <img src={image} alt={alt} />
      </ImageDiv>

      <ContentDiv className="each-w " data-aos="zoom-in-down"
        data-aos-duration="700"
        currentLanguage={currentLanguage}
      >
        <p className="title">{title}</p>
        <p className="description">{p}</p>
        <h4 className="stack">{stack}</h4>
        <div className="card-link">
          <a target="_blank" href={demoUrl} rel="noopener noreferrer">
            <i className="link-icon fas fa-desktop" />
            <span>{t("projectList.demo")}</span>
          </a>
          <a target="_blank" href={sourceUrl} rel="noopener noreferrer">
            <i className="link-icon fab fa-github" />
            <span>{t("projectList.source")}</span>
          </a>
        </div>
      </ContentDiv>
    </Wrapper>
  );
};
export default Card;
