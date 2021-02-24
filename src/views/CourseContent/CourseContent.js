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

import styles from "assets/jss/material-kit-react/views/CourseContent.js";

// Sections for this page
import ReactStars from "react-rating-stars-component";
import RaisedCard from "./Sections/RaisedCard";
import CourseContentBody from "./Sections/CourseContentBody";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CourseContent(props) {
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
      <div style={{ backgroundColor: "black", height: "500px" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <div style={{ height: "200px" }}></div>
              <h1 className={classes.title}>
                API Masterclass with NodeJS + expressJS
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </div>
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
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}></div>
      </div> */}
      <div style={{ marginLeft: "100px", marginRight: "100px" }}>
        <CourseContentBody />
      </div>
      <Footer />
    </div>
  );
}
