import React, { useState } from "react";
import { Wrapper } from "./ContactUsStyles";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
const ContactUs = () => {
  const [input, setInput] = useState({
    from_name: "",
    from_email: "",
    from_message: "",
  });

  const [nameErrorBorder, setNameErrorBorder] = useState(false);
  const [emailErrorBorder, setEmailErrorBorder] = useState(false);
  const [messageErrorBorder, setMessageErrorBorder] = useState(false);
  const [recaptchaErrorBorder, setRecaptchaErrorBorder] = useState(false)

  const handleOnChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
      switch (e.target.name) {
        case "from_name":
          return setNameErrorBorder(false);
        case "from_email":
          return setEmailErrorBorder(false);
        case "from_message":
          return setMessageErrorBorder(false);
        default:
          return ``;
      }
    }
  };

  const sendEmail = e => {
    e.preventDefault();
    if (!input.from_name || !input.from_email || !input.from_message) {
      !input.from_name && setNameErrorBorder(true);
      !input.from_email && setEmailErrorBorder(true);
      !input.from_message && setMessageErrorBorder(true);
    } else {
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      
      emailjs
        .sendForm(
          "service_ot987ky",
          "template_2hz48mt",
          e.target,
          "user_Xg4G1M9ikFachf4iaOQ6Y"
        )
        .then(
          result => {
            setRecaptchaErrorBorder(false)
            console.log(result.text);
          },
          error => {
            setRecaptchaErrorBorder(true)
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <Wrapper
        nameErrorBorder={nameErrorBorder}
        emailErrorBorder={emailErrorBorder}
        messageErrorBorder={messageErrorBorder}
        recaptchaErrorBorder={recaptchaErrorBorder}
      >
        <h1>
          Contact Me
          <i className="fas fa-mobile-alt" />
        </h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="eachInput">
            <input type="hidden" name="to_name" value="San" />
          </div>

          <div className="eachInput">
            <label>Name :</label>
            <input
              className="ifEmpty-name"
              placeholder="How should I address you ?"
              type="text"
              name="from_name"
              value={input.from_name}
              onChange={handleOnChange}
            />
          </div>

          <div className="eachInput">
            <label>Email :</label>
            <input
              className="ifEmpty-email"
              placeholder="Kindly provide your email."
              type="email"
              name="from_email"
              value={input.from_email}
              onChange={handleOnChange}
            />
          </div>

          <div className="eachInput">
            <label>Message :</label>
            <textarea
              className="ifEmpty-message"
              placeholder="Enter your message here."
              name="from_message"
              value={input.from_message}
              onChange={handleOnChange}
            />
          </div>

          <div className="submit-criteria">
            <div className="recaptcha-container">
              <div  
                className="g-recaptcha"
                data-sitekey="6LcdiQYaAAAAAJM56lJqJ1KBjRkbxezFi7Pz2F-a"
              />
            </div>
            <div className="caption ifEmpty-recaptcha">
              - - click on recaptcha before sending - -
            </div>
            <Button className="send-btn" type="submit">
              <i className="far fa-paper-plane" />
              Send
            </Button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default ContactUs;
