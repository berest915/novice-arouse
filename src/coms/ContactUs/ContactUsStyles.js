import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(194, 223, 255, 0.2);
  
  padding: 50px 0;
  width: 90%;
  max-width: 800px;
  margin: 5rem auto;
  border-radius: 8px;
  box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;
  -webkit-box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;
  -moz-box-shadow: 0px 0px 98px -30px rgba(194, 223, 255, 1) inset;

  h1 {
    font-family: "cabin", "san-serif";
    margin-bottom: 1.5rem;
    text-align: center;
    color: #3f4d64;
    i {
      padding-left: 1rem;
      opacity: 0.8;
      transform: rotate(-5deg);
      transition: transform 0.4s ease;
      :hover {
        transform: rotate(5deg);
      }
    }
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
        font-family: "cabin", "san-serif";
      }

      input,
      textarea {
        font-family: "cabin", "san-serif";
        background-color: rgba(194, 223, 255, 0.6);

        margin: 5px 8px;
        outline: none;
        width: 80%;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 8px 16px;

        
      }

      textarea {
        height: 100px;
        resize: none;
        overflow: auto;

        ::-webkit-scrollbar {
          width: 8px;
          margin-right: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #e1ecf4;
          width: 20px;
          :hover {
            background-color: #e0fbfc;
          }
        }
        ::-webkit-scrollbar-thumb {
          background-color: #a6c8de;
          border-radius: 20px;
          border: 3px solid var(--sidebar-chatroom-bg--);
          :hover {
            background-color: #79adcd;
          }
        }
      }

      .input-name {
        border: ${props => props.nameErrorBorder ? `1px solid red`:`1px solid silver`};
        transition: border 0.4s ease;
      }
      .input-email {
        border: ${props => props.emailErrorBorder ? `1px solid red`:`1px solid silver`};
        transition: border 0.4s ease;
      }
      .input-message {
        border: ${props => props.messageErrorBorder ? `1px solid red`:`1px solid silver`};
        transition: border 0.4s ease;
      }
 

      
    }

    .submit-criteria {
      display: flex;
      flex-direction: column;
      .recaptcha-container {
        /* padding-left: 20%; */
        /* width: 100%; */
        margin: 0.5rem auto;
      }

      .g-recaptcha {
        display: inline-block;
        transition: transform 0.4s ease;
      }

      .send-btn {
        background-color: rgba(142, 213, 205);

        color: #42618a;
        font-family: "cabin", "san-serif";
        border: 1px solid rgba(194, 223, 255, 0.4);
        /* outline: none; */
        border-radius: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 0.5rem 1rem;
        transition: all 0.4s ease;
        i {
          margin-right: 1rem;
        }

        :hover {
          cursor: pointer;
          background-color: rgba(192, 213, 255);
          color: black;
          transform: scale(1.05);
          transition: all 0.4s ease;
        }
      }

      .caption {
        font-family: "cabin", "san-serif";
        font-size: 12px;
        color: gray;
        opacity: 0.8;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 900px) {
    h1 {
      text-align: left;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 0.5rem;
    }
    .contact-form {
      .eachInput {
        flex-direction: column;
        margin: 0;
        width: 100%;
        label,
        input,
        textarea {
          margin-left: 0;
          margin-right: 0;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 560px) {
    .contact-form {
      .submit-criteria {
        .caption {
          transition: font-size 0.4s ease;
          font-size: 10px;
          text-align: left;
          margin-left: 0;
        }
        .send-btn {
          margin-left: 0;
          font-size: 1rem;
          padding: 0;
        }
      }
    }
    .g-recaptcha {
      transition: transform 0.4s ease;
      transform: scale(0.9);
      -webkit-transform: scale(0.9);
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
    }
  }
  @media (max-width: 520px) {
    .g-recaptcha {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    }
  }
  @media (max-width: 460px) {
    padding: 30px 0;
    .contact-form {
      .submit-criteria {
        .caption {
          transition: font-size 0.4s ease;
          font-size: 8px;
        }
      }
    }
    h1 {
      font-size: 1.5rem;
    }
    .contact-form {
      label,
      input,
      textarea {
        font-size: 0.8rem;
      }
    }
    .g-recaptcha {
      transform: scale(0.7);
      -webkit-transform: scale(0.7);
    }
  }
  @media (max-width: 410px) {
    .g-recaptcha {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
    }
  }
  @media (max-width: 360px) {
    .contact-form {
      input,
      textarea {
        font-size: 0.7rem;
      }
    }
   
  }
`;
