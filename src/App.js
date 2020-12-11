import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import ProjectList from "./coms/ProjectList/ProjectList";
import TechStack from "./coms/TechStack/TechStack";
import {
  currentTechStackProps,
  furtherTechStackProps,
} from "./coms/TechStack/TechStackProps";
import LogoText from "./coms/LogoText/LogoText";
import HeaderLinks from "./coms/HeaderLinks/HeaderLinks";
import MainMessage from "./coms/MainMessage/MainMessage";
import CoverImage from "./coms/CoverImage/CoverImage";

const App = () => {
  return (
    <>
      <div style={{ padding: "8vh 8vw 0 8vw" }}>
        <div className="app">
          <LogoText />
          <HeaderLinks />
          <MainMessage />
          <CoverImage />
          <TechStack
            title="My Current Tech Stack"
            techStackProps={currentTechStackProps}
          />
          <ProjectList />
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
