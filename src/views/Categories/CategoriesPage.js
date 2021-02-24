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

import styles from "assets/jss/material-kit-react/views/Courses.js";

// Sections for this page
import CoursePills from "./Sections/CoursePills.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CategoriesPage(props) {
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
              <h1 className={classes.title}>What you wanna learn today?</h1>
              <h4>Thousands of freshly added courses to choose from!</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}></div>
      </div> */}

      <div style={{ marginLeft: "100px", marginRight: "100px" }}>
        <CoursePills />
      </div>
      <Footer />
    </div>
  );
}
