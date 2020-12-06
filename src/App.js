import React, { useContext, useEffect } from "react";
import "./App.css";
import { TopBar } from "./listing";
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
      <ToastContainer />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum temporibus
        tempora doloremque neque a quas, praesentium quibusdam libero quisquam
        eos dolor animi, voluptates consectetur debitis, repellat vel incidunt?
        Nobis, ipsam!
      </p>
      <React.Fragment>
        <GlobalStyle
          sliderTop={data?.sliderTop}
          sliderBottom={data?.sliderBottom}
        />
      </React.Fragment>
    </div>
  );
}

export default App;
