import styled from "styled-components";

export const Wrapper = styled.div`
  .dir {
    height: 2rem;
    display: flex;
    align-items: center;

    .border {
      width: 25%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    }

    .item {
      padding-left: 3rem;
      font-weight: 500;

      .item__link {
        text-decoration: none;
        font-size: 1.1rem;
        color: rgba(0, 0, 0, 0.6);

        display: inline-flex;
        align-items: center;
      }

      .item__icon {
        padding-right: 6px;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
