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

      .item {
        letter-spacing: 1px;
        margin-left: 3rem;
        font-weight: 500;
        .item__link {
          text-decoration: none;
          font-size: 1.1rem;

          display: inline-flex;
          align-items: center;

          :hover {
            color: black;
            transform: scale(1.05);
            transition: all 0.4s ease;
          }
        }

        .item__icon {
          padding-right: 6px;
          font-size: 1.5rem;
        }
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
          margin: 0;
          .item__link {
            padding: 10px 30px;
            border: 1px solid #59619b;
            width: 100%;
            margin: 8px auto;
            display: flex;

            :hover {
              transition: all 0.4s ease;
              background-color: #59619b;
              color: #c2dfff;
            }

            .item__icon {
              flex: 1;
              padding: 0 25px;

              :hover {
                color: #c2dfff;
              }
            }

            .item__text {
              flex: 3;
            }
          }
        }
      }
    }
  }
`;
