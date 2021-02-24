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

const useStyles = makeStyles(styles);

export default function RaisedCard() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer>
            <h3 className={classes.title}>
              $49.99 <del className={classes.strikText}>$99.99</del>
            </h3>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="primary" block className={classes.addtocartbtn}>
            Add to cart
          </Button>
        </GridItem>
        <br />
        <br />
        <br />
        <GridItem xs={12} sm={12} md={12}>
          <Button color="primary" block className={classes.buynowbtn}>
            But now
          </Button>
        </GridItem>
      </GridContainer>
      <br />

      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <h3 className={classes.raisedCardText1}>Course highlights:</h3>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <p className={classes.raisedCardText2}>20 hours of content</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <p className={classes.raisedCardText2}>4 downloadable content</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <p className={classes.raisedCardText2}>Recently updated</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <p className={classes.raisedCardText2}>Lifetime access</p>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <h3 className={classes.raisedCardText1}>Skills in this course:</h3>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="primary" block className={classes.skillbtn}>
            NodeJS
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            expressJS
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            MongoDB
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            Backend Dev
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            Web
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            Middleware
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            API
          </Button>
          <Button color="primary" block className={classes.skillbtn}>
            Server configuration
          </Button>
        </GridItem>
      </GridContainer>
      <br />
    </div>
  );
}
