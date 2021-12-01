import "./App.scss";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Stack from "./pages/Stack";
import TwoProject from "./pages/TwoProject";
import FourProject from "./pages/FourProject";
import Education from "./pages/Education";
import Career from "./pages/Career";

function App() {
  return (
    <div className="App">
      <div id="s1" className="full-Page">
        <Main />
      </div>
      <div id="s2" className="full-Page">
        <Introduce />
      </div>
      <div id="s3" className="full-Page">
        <Stack />
      </div>
      <div id="s4" className="full-Page">
        <Education />
      </div>
      <div id="s5" className="full-Page">
        <Career />
      </div>
    </div>
  );
}

export default App;
