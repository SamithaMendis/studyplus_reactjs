import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import PopularCategory from "./Sections/PopularCategory.js";
import TopCourses from "./Sections/TopCourses.js";
import AchieveGoalsSection from "./Sections/AchieveGoalsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Study Plus"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Learn anything, anywhere, anytime
              </h1>
              <h4>
                Start Learning something new right now. Choose from over 500000+
                courses. Grab your first course for 25% off!
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <PopularCategory />
          <TopCourses />
          <AchieveGoalsSection />
        </div>
      </div> */}
      <div style={{ marginLeft: "100px", marginRight: "100px" }}>
        <ProductSection />
        <PopularCategory />
        <TopCourses />
        <AchieveGoalsSection />
        <Footer />
      </div>
    </div>
  );
}
