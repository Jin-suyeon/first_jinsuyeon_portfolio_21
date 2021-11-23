import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Stack from "./pages/Stack";
import EducationOrCareer from "./pages/EducationOrCareer";
import TwoProject from "./pages/TwoProject";
import FourProject from "./pages/FourProject";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/stack" component={Stack} />
        <Route
          exact
          path="/education_or_career"
          component={EducationOrCareer}
        />
        <Route exact path="/2week_project" component={TwoProject} />
        <Route exact path="/4week_project" component={FourProject} />
      </Switch>
    </div>
  );
}

export default App;
