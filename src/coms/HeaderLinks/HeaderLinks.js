import React from "react";
import { Wrapper } from "./HeaderLinksStyles";

const HeaderLinks = () => {
  return (
    <>
      <Wrapper>
        <div className="dir">
          <div className="border" />
          <div className="items">
            <div className="item">
              <a href="#" className="item__link">
                <i className="item__icon fab fa-github" />
                <span className="item__text">Repo</span>
              </a>
            </div>
            <div className="item">
              <a href="#" className="item__link">
                <i className="item__icon far fa-file-pdf" />
                <span className="item__text">Resume</span>
              </a>
            </div>
            {/* <div className="item">
              <a href="#" className="item__link">
                <i className="item__icon far fa-paper-plane" />
                <span className="item__text">Contact</span>
              </a>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HeaderLinks;
