import "./App.css";
import InicialPage from "./components/InicialPage/InicialPage";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import { proyectsData } from "../src/data";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <InicialPage />
      <AboutMe />
      <Portfolio proyectsData={proyectsData} />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
