import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(194, 223, 255, 0.2);
  padding: 50px 0;
  width: 90%;
  margin: 5rem auto;
  border-radius: 8px;
  box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;
  -webkit-box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;
  -moz-box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;

  h1 {
    font-family: "cabin", "san-serif";
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 500px;
    margin: 0 auto;

    .eachInput {
      display: flex;
      margin: 3px 0;

      label {
        margin: 5px 8px;
        width: 15%;
      }

      input,
      textarea {
        font-family: "cabin", "san-serif";
        background-color: rgba(194, 223, 255, 0.4);

        margin: 5px 8px;
        outline: none;
        width: 80%;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 8px 12px;
      }

      textarea {
        height: 100px;
        resize: none;
        overflow: hidden;
      }
    }

    .submit-criteria {
      display: flex;
      flex-direction: column;
      .recaptcha-container {
        padding-left: 20%;
        width: 100%;
        margin: 0.5rem 0;
      }

      .g-recaptcha {
        display: inline-block;
      }

      .send-btn {
        background-color: rgba(182, 222, 225, 1);
        color: #384e77;
        font-family: "cabin", "san-serif";
        border: 1px solid rgba(194, 223, 255, 0.4);
        outline: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 0 1rem;
        padding: 1rem;

        :hover {
          cursor: pointer;
          background-color: rgba(192, 213, 255);
        }
      }
    }
  }
`;
