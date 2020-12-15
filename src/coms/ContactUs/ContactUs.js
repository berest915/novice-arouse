import React from "react";
import { Wrapper } from "./ContactUsStyles";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const sendEmail = e => {
    e.preventDefault();
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
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Wrapper>
        <h1>Contact Me</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="eachInput">
            <input type="hidden" name="to_name" value="San" />
          </div>
          <div className="eachInput">
            <label>Name :</label>
            <input
              placeholder="How should I address you?"
              type="text"
              name="from_name"
            />
          </div>

          <div className="eachInput">
            <label>Email :</label>
            <input
              placeholder="Kindly provide your email."
              type="email"
              name="from_email"
            />
          </div>

          <div className="eachInput">
            <label>Message :</label>
            <textarea
              placeholder="Enter your message here."
              name="from_message"
            />
          </div>

          <div className="submit-criteria">
            <div className="recaptcha-container">
              <div
                className="g-recaptcha"
                data-sitekey="6LcdiQYaAAAAAJM56lJqJ1KBjRkbxezFi7Pz2F-a"
              />
            </div>
            <button className="send-btn" type="submit" >Send</button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default ContactUs;
