import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import TeamContainer from "./Components/team/team";
import Contact from "./Components/Contact/Contact";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
// import PageNotFound from "./components/auth/PageNotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={TeamContainer} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
