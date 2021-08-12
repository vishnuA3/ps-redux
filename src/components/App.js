import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import AboutPage from "./aboutpage/AboutPage";
import Header from "./common/Header";
import PagenotFound from "./PagenotFound";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PagenotFound} />
      </Switch>
    </div>
  );
};
export default App;
