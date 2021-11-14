import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import ToTopButton from "./Components/Navbar/toTopButton";
import Footer from "./Components/Footer/footer";
import TeamContainer from "./Components/team/team";
import Contact from "./Components/Contact/Contact";

// Pages
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToTopButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={TeamContainer} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
