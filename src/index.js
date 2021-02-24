import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SingleCourse from "views/SingleCourse/SingleCourse";
import Checkout from "views/Checkout/Checkout";
import CategoriesPage from "views/Categories/CategoriesPage";
import LoginPage1 from "views/LoginPage/LoginPage1";
import CourseContent from "views/CourseContent/CourseContent";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/single-course" component={SingleCourse} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/course-content" component={CourseContent} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/login-page1" component={LoginPage1} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
