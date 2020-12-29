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
import ContactUs from "./coms/ContactUs/ContactUs";
import Banner from "./coms/Banner/Banner";

import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button'
import i18next from 'i18next'
const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="app">
        <div className="app__body">
          <Button onClick={() => i18next.changeLanguage('en')}>English</Button>
          <Button onClick={() => i18next.changeLanguage('ko')}>Korean</Button>
          <Button onClick={() => i18next.changeLanguage('chi')}>Chinese</Button>
          {/* <h2>{t("Thanks.1")}</h2>
          <h2>{t("Why.1")}</h2> */}
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
      <Banner text="San Leow ©2020 All Rights Reserved." />
    </>
  );
};

export default App;
