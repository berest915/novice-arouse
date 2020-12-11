import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import coverImg from "./img/cover-img.jpg";
import {
  StyledComponents,
  ReactLogo,
  Firebase,
  Github,
} from "@styled-icons/simple-icons";
import ProjectList from "./coms/ProjectList/ProjectList";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__header">
          <div className="header__content">
            <div className="logo-text">
              <p>SAn</p>
              <p>LEOW</p>
            </div>

            {/* border div */}
            <div className="dir">
              <div className="border" />
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
              <div className="item">
                <a href="#" className="item__link">
                  <i className="item__icon far fa-paper-plane" />
                  <span className="item__text">Contact</span>
                </a>
              </div>
            </div>

            {/* main-msg */}
            <div className="msg">
              <p>
                Hey there, I'm <span>San.</span>
              </p>
              <p>
                <span>Frontend React</span> Developer,
              </p>
              <p>
                Novice but <span>Notable.</span>
              </p>
            </div>

            {/* cover-img */}
            <div className="cover">
              <img src={coverImg} className="cover__img" />
              <div className="cover__tech">
                <p className="title">My Current Tech Stack</p>
                <div className="stacks">
                  <p className="stack">
                    <ReactLogo className="styled-icons" />
                    <span>ReactJs</span>
                  </p>
                  <p className="stack">
                    <StyledComponents className="styled-icons" />
                    <span>Styled-Components</span>
                  </p>
                  <p className="stack">
                    <Firebase className="styled-icons" />
                    <span>Firebase</span>
                  </p>
                  <p className="stack">
                    <Github className="styled-icons" />
                    <span>Github</span>
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
