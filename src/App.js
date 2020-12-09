import React, { useContext, useEffect } from "react";
import "./App.css";
import {
  TopBar,
  Header,
  ServicesComponent,
  AboutComponent,
  SamplesComponent,
  CaseStudiesComponent,
  BlogComponent,
  ReviewSectionComponent,
  ContactComponent,
} from "./listing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StartAlert from "./Utils/StartAlert";
import { createGlobalStyle } from "styled-components";
import { DataContext } from "./data/data.context";

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar-track {
      background: ${(props) => props.sliderBottom}
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.sliderTop}
    }
`;

function App() {
  const { data } = useContext(DataContext);

  useEffect(() => {
    setTimeout(() => {
      StartAlert();
    }, 7000);
  }, []);

  return (
    <div>
      <TopBar />
      <Header />
      <ServicesComponent />
      <AboutComponent />
      <SamplesComponent />
      <CaseStudiesComponent />
      <BlogComponent />
      <ReviewSectionComponent />
      <ContactComponent />
      <ToastContainer />
      <React.Fragment>
        <GlobalStyle
          sliderTop={data?.avatarData?.sliderTop}
          sliderBottom={data?.avatarData?.sliderBottom}
        />
      </React.Fragment>
    </div>
  );
}

export default App;
