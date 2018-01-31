import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import TopNavigation from "./components/partials/TopNavigation";

const App = ({ location }) => (
  <div className="container">
    <TopNavigation />
    <Route location={ location } path="/" exact component={HomePage} />
    <Route location={ location } path="/login" exact component={LoginPage} />
  </div>
);

export default App;
