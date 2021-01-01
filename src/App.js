import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import ContactUs from "./coms/ContactUs/ContactUs";
import Banner from "./coms/Banner/Banner";
import NotExist from "./coms/NotExist/NotExist";

import { useTranslation } from "react-i18next";
import FontState from "./context/FontState";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <FontState>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="app">
                <div className="app__body">
                  <LogoText />
                  <HeaderLinks />
                  <MainMessage />
                  <CoverImage />
                  <TechStack
                    title={t("techStack.current")}
                    techStackProps={currentTechStackProps}
                  />
                  <ProjectList />
                  <TechStack
                    title={t("techStack.further")}
                    techStackProps={furtherTechStackProps}
                  />
                  <ContactUs />
                </div>
              </div>
            </Route>
            <Route component={NotExist} />
            <Banner text="San Leow ©2020 All Rights Reserved." />
          </Switch>
        </Router>
      </FontState>
    </>
  );
};

export default App;
