import { Route, Switch } from "react-router-dom";

// Components
import TeamContainer from "./Components/Team/team";
import Contact from "./Components/Contact/Contact";

// Pages
// import Events from "./Pages/Events";
import Home from "./Pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <div className="App">
        <Route path="/team" component={TeamContainer} />
        {/*<Route path="/events" component={Events} />*/}
        <Route path="/contact" component={Contact} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </div>          
    </Switch>
  );
};

export default App;
