import "./App.scss";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Stack from "./pages/Stack";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <div className="full-Page">
        <Main />
      </div>
      <div className="full-Page">
        <Introduce />
      </div>
      <div className="full-Page">
        <Stack />
      </div>
      <div className="full-Page">
        <Project />
      </div>
    </div>
  );
}

export default App;
