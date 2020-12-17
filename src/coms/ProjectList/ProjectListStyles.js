import styled, { css } from "styled-components";

const CARD_BG = {
  BG_DARKER: "rgba(211,211,211, 0.8)",
  BG_LIGHTER: "rgba(211,211,211, 0.3)",
  CARD_BG_ONE: "#F0F0F6",
};

//! css
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

//! styled
export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.isRowReverse && "flex-direction: row-reverse"};

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
    width: 60%;
    transition: width 0.4s ease;

    a {
      color: #59619b;
      text-decoration: none;
      transition: all 0.4s ease;
      padding: 5px 12px;
      .link-icon {
        margin-right: 8px;
      }
      :hover {
        background-color: #59619b;
        color: #c2dfff;
      }
    }
  }

  @media (max-width: 600px) {
    .card-link {
      width: 70%;
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
  @media (max-width: 380px) {
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
