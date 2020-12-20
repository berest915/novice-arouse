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
import Banner from "./coms/Banner/Banner";
import ContactUs from "./coms/ContactUs/ContactUs"

const App = () => {
  return (
    <>
      <div className='app'>
        <div className="app__body">
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
          <ContactUs />
         
        </div>
      </div>
      <Banner
        text="San Leow ©2020 All Rights Reserved."
      />
    </>
  );
};

export default App;
