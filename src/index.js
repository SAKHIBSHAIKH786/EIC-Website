import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App"
import Navbar from "./Components/Navbar/Navbar";
import ToTopButton from "./Components/Navbar/toTopButton"
import Footer from "./Components/Footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ToTopButton />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
