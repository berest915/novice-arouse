import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import coverImg from "./img/cover-img.jpg";
import ProjectList from "./coms/ProjectList/ProjectList";
import TechStack from "./coms/TechStack/TechStack";
import {
  currentTechStackProps,
  furtherTechStackProps,
} from "./coms/TechStack/TechStackProps";

const App = () => {
  return (
    <>
      <div style={{ padding: "8vh 8vw 0 8vw" }}>
        <div className="app">
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
            </div>

            {/* current tech-stack */}
            <TechStack
              title="My Current Tech Stack"
              techStackProps={currentTechStackProps}
            />

            {/* projects */}
            <ProjectList />

            {/* current tech-stack */}
            <TechStack
              title="My Further Tech Stack"
              techStackProps={furtherTechStackProps}
            />
        </div>
      </div>
    </>
  );
};

export default App;
