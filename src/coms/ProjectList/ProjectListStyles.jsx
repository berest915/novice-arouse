import styled, { css } from "styled-components";
import { GFont_MaShanZheng } from "../../css-constants/css-constants";
// css
const leftBoxShadow = css`
  -webkit-box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
  -moz-box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
  box-shadow: -12px -4px 36px -8px rgba(112, 100, 112, 0.55);
`;

const rightBoxShadow = css`
  -webkit-box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
  -moz-box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
  box-shadow: 12px 4px 36px -8px rgba(112, 100, 112, 0.55);
`;

// styled
export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.isRowReverse && "flex-direction: row-reverse"};

  .mainTitle {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .each-w {
    width: 48%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    transition: all 0.4 ease;

    .each-w {
      width: 86%;
    }
  }
`;

export const ImageDiv = styled.div`
  ${props => (props.isRowReverse === false ? leftBoxShadow : rightBoxShadow)}

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    ${leftBoxShadow};
  }
`;

export const ContentDiv = styled.div`
  font-family: Roboto "san-serif";
  font-weight: 500;
  text-align: justify;
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem 0;
    text-transform: uppercase;
    transition: font-size 0.4s ease;
  }

  .stack {
    margin: 1rem 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: rgba(80, 80, 110, 0.8);
  }

  .card-link {
    display: flex;
    justify-content: space-between;
    width: 80%;
    transition: width 0.4s ease;
    ${props => props.currentLanguage === "chi" && GFont_MaShanZheng}

    a {
      color: #436eb1;
      text-decoration: none;
      transition: all 0.4s ease;
      padding: 8px 12px;
      .link-icon {
        margin-right: 8px;
      }
      :hover {
        background-color: #59619b;
        color: #c2dfff;
      }
    }
  }

  @media (max-width: 570px) {
    .card-link {
      width: 80%;
    }
  }

  @media (max-width: 460px) {
    .title {
      transition: font-size 0.4s ease;
      font-size: 1.2rem;
      text-align: center;
    }

    .card-link {
      width: 100%;
    }
  }

  @media (max-width: 390px) {
    .title {
      font-size: 1rem;
    }

    .description {
      display: none;
    }

    .card-link {
      flex-direction: column;
      text-align: center;

      a {
        margin: 0.5rem 0;
        padding: 0.5rem 1rem;
        border: 1px solid silver;

        :hover {
          transition: all 0.4s ease;
          background-color: #59619b;
          color: #c2dfff;
        }
      }
    }
  }
`;
