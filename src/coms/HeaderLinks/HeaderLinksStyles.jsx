import styled from "styled-components";

export const Wrapper = styled.div`
  .dir {
    height: 2rem;
    display: flex;
    align-items: center;

    .border {
      width: 25%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.7);
      transition: all 0.4s ease;
    }

    .items {
      display: flex;
    }

    .items > .item {
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

  @media (max-width: 900px) {
    .dir {
      height: 100%;
      .border {
        width: 30%;
        transition: all 0.4s ease;
      }
      .items > .item {
        padding-left: 1.5rem;

        .item__link {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .dir {
      .border {
        width: 20%;
      }
    }
  }

  @media (max-width: 550px) {
    .dir {
      .border {
        width: 10%;
      }
    }
  }
  
  @media (max-width: 460px) {
    .dir {
      .border {
        width: 0;
      }
      .items {
        flex-direction: column;
        width: 100%;
        .item {
          padding: 0;
          a {
            padding: 10px 30px;

            border: 1px solid silver;
            width: 100%;
            margin: 8px auto;
            display: flex;
            i {
              flex: 1;
              padding: 0 25px;
            }
            span {
              flex: 3;
            }
          }
        }
      }
    }
  }
`;
