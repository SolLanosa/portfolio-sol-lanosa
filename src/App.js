import "./App.css";
import InicialPage from "./components/InicialPage/InicialPage";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import { proyectsData } from "../src/data";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <InicialPage />
    </div>
  );
}

export default App;
