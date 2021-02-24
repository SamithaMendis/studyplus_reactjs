import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Star from "@material-ui/icons/Star";
import AccessAlarm from "@material-ui/icons/AccessAlarm";
import School from "@material-ui/icons/School";
import MenuBook from "@material-ui/icons/MenuBook";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/SingleCourseDetails.js";
import { Button, Card } from "@material-ui/core";

import team1 from "assets/img/faces/card-profile1-square.jpg";
import img1 from "assets/img/bg2.jpg";
import image from "assets/img/faces/avatar.jpg";
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles(styles);

export default function StudentReviews() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <GridContainer>
            <img
              src={image}
              alt="..."
              style={{ width: "80px" }}
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <p className={classes.reviewname}>Cameron Williamson</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <ReactStars />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p className={classes.reviewtext}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
