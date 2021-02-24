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

import styles from "assets/jss/material-kit-react/views/SingleCourse.js";

// Sections for this page
import ReactStars from "react-rating-stars-component";
import RaisedCard from "./Sections/RaisedCard";
import CourseBody from "./Sections/CourseBody";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SingleCourse(props) {
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
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>
                API Masterclass with NodeJS + expressJS
              </h1>
              <h4>
                The best Node API course for beginners to intermediate level.
                Guarantee to make you better developer.
              </h4>
              <br />
              <h4 style={{ fontWeight: "bold" }}>
                By Dianne Russell Last updated 20th August 2020
              </h4>
              <br />
              <ReactStars count={5} size={24} activeColor="#ffd700" />
              <h4 style={{ fontWeight: "bold" }}>4.0 (12,2232 reviews)</h4>
            </GridItem>
          </GridContainer>
        </div>
    
      </Parallax>
      <div
        className={classNames(
          classes.courseContentSideMenu,
          classes.courseContentSideMenuRaised
        )}
      >
        <div className={classes.container}>
          <RaisedCard />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CourseBody />
        </div>
      </div>
      <Footer />
    </div>
  );
}
