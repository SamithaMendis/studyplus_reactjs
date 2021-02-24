import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-kit-react/views/CourseContentDetails.js";
import { Button, Card, Typography } from "@material-ui/core";

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
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <h3 className={classes.title}>Course Content</h3>
          </GridContainer>
        </GridItem>
      </GridContainer>

      <br />

      <div>
        <Accordion style={{ marginLeft: "-15px", marginRight: "-15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Intro to the course
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>1. Install node and npm</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>2. MongoDB tlas configiration</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>3. How to...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginLeft: "-15px", marginRight: "-15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Installing and environment setup
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>1. Install node and npm</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>2. MongoDB tlas configiration</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>3. How to...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginLeft: "-15px", marginRight: "-15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Controllers and listeners
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>1. Install node and npm</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>2. MongoDB tlas configiration</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>3. How to...</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginLeft: "-15px", marginRight: "-15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Controllers and listeners
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>1. Install node and npm</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>2. MongoDB tlas configiration</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>3. How to...</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginLeft: "-15px", marginRight: "-15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Controllers and listeners
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>1. Install node and npm</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>2. MongoDB tlas configiration</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>3. How to...</Typography>
          </AccordionDetails>
        </Accordion>
      </div>

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
