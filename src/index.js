import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  SignIn,
  Season,
  showPreview,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Season" element={<Season />} />
      <Route path="/Show/:id" component={showPreview} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

