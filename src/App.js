import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/themes.js";
import Navbar from "./components/Navbar/index.js";
import Education from "./components/Education/index.js";
import Mainsection from "./components/Mainsection/index.js";
import Experience from "./components/Experience/index.js";
import Skills from "./components/Skills/index.js";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Mainsection />
          <Skills />
          <Experience />
          <Education />
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
