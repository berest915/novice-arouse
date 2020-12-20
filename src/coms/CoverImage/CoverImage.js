import React from "react";
import styled from "styled-components";
import coverImg from "../../img/cover-img-min.jpg";

const CoverImage = () => {
  return (
    <>
      <Wrapper>
        <img src={coverImg} className="cover__img" />
      </Wrapper>
    </>
  );
};

export default CoverImage;

const Wrapper = styled.div`
  .cover__img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
