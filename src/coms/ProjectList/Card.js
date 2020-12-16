import React from "react";
import { Wrapper, ImageDiv, ContentDiv } from "./ProjectListStyles";

const Card = ({ card }) => {
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
    <Wrapper isRowReverse={isRowReverse}>
      <ImageDiv className="each-w" isRowReverse={isRowReverse}>
        <img src={image} alt={alt} />
      </ImageDiv>

      <ContentDiv className="each-w ">
        <p className="title">{title}</p>
        <p className="description">{p}</p>
        <h4 className="stack">{stack}</h4>
        <div className="card-link">
          <a target="_blank" href={demoUrl} rel="noopener noreferrer">
            <i  className="link-icon fas fa-desktop" />
            <span>Demo</span>
          </a>
          <a target="_blank" href={sourceUrl} rel="noopener noreferrer">
            <i className="link-icon fab fa-github" />
            <span>Source</span>
          </a>
        </div>
      </ContentDiv>
    </Wrapper>
  );
};
export default Card;
