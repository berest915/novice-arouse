import React, { useState, useContext } from "react";
import { Wrapper } from "./ContactUsStyles";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import fontContext from "../../context/fontContext";

const ContactUs = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useContext(fontContext);
  const [input, setInput] = useState({
    from_name: "",
    from_email: "",
    from_message: "",
  });

  const [nameErrorBorder, setNameErrorBorder] = useState(false);
  const [emailErrorBorder, setEmailErrorBorder] = useState(false);
  const [messageErrorBorder, setMessageErrorBorder] = useState(false);

  const [captionColor, setCaptionColor] = useState("");
  const [captionText, setCaptionText] = useState(
    "- - click on recaptcha before sending - -"
  );

  const [recaptchaIsClicked, setRecaptchaIsClicked] = useState(false);

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
    }else{
      switch(e.target.name){
        case "from_name":
          return setNameErrorBorder(true);
        case "from_email":
          return setEmailErrorBorder(true);
        case "from_message":
          return setMessageErrorBorder(true);
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
      recaptchaIsClicked &&
        setInput({
          from_name: "",
          from_email: "",
          from_message: "",
        });
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      // 1 minute window on expired-or-duplicated validation
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID,
          // pass in additional custom-callback,
          setCaptionText(),
          setCaptionColor()
        )
        .then(
          result => {
            console.log(result.text);
            setCaptionColor("green");
            setCaptionText("- - submit successful - -");
          },
          error => {
            setCaptionColor("orange");
            error.text === "timeout-or-duplicate" &&
              setCaptionText("wait 1 minute before resending");
            error.text === "The g-recaptcha-response parameter not found" &&
              setCaptionText("- - click on recaptcha before sending - -");
          }
        );
    }
  };

  const recaptchaOnTick = () => {
    setRecaptchaIsClicked(true);
    console.info("Recaptcha ticked");
  };

  return (
    <>
      <Wrapper
        nameErrorBorder={nameErrorBorder}
        emailErrorBorder={emailErrorBorder}
        messageErrorBorder={messageErrorBorder}
        captionColor={captionColor}
        currentLanguage={currentLanguage}
      >
        <h1>
          {t("contactUs.title")}
          <i className="fas fa-mobile-alt" />
        </h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="eachInput">
            <input type="hidden" name="to_name" value="San" />
          </div>

          <div className="eachInput">
            <label>{t("contactUs.nameLabel")}</label>
            <input
              className="ifEmpty-name"
              placeholder={t("contactUs.namePlaceholder")}
              type="text"
              name="from_name"
              value={input.from_name}
              onChange={handleOnChange}
            />
          </div>

          <div className="eachInput">
            <label>{t("contactUs.emailLabel")}</label>
            <input
              className="ifEmpty-email"
              placeholder={t("contactUs.emailPlaceholder")}
              type="email"
              name="from_email"
              value={input.from_email}
              onChange={handleOnChange}
            />
          </div>

          <div className="eachInput">
            <label>{t("contactUs.messageLabel")}</label>
            <textarea
              className="ifEmpty-message"
              placeholder={t("contactUs.messagePlaceholder")}
              name="from_message"
              value={input.from_message}
              onChange={handleOnChange}
            />
          </div>

          <div className="submit-criteria">
            <div className="recaptcha-container">
              {/* <div
                className="g-recaptcha"
                // data-sitekey="6LcdiQYaAAAAAJM56lJqJ1KBjRkbxezFi7Pz2F-a"
                data-sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
              /> */}
              <ReCAPTCHA
                className="g-recaptcha"
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                onChange={recaptchaOnTick}
              />
            </div>
            <div className="caption ifEmpty-recaptcha">{captionText}</div>
            <Button className="send-btn" type="submit">
              <i className="far fa-paper-plane" />
              {t("contactUs.sendButton")}
            </Button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default ContactUs;
