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

import styles from "assets/jss/material-kit-react/views/CourseContentDetails.js";
import { Button, Card } from "@material-ui/core";

import team1 from "assets/img/faces/card-profile1-square.jpg";
import img1 from "assets/img/bg2.jpg";
import image from "assets/img/faces/avatar.jpg";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CourseContentBody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <br />
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <GridItem xs={12} sm={12} md={12}>
            <img
              src={img1}
              alt="..."
              className={
                classes.imgRounded_small + " " + classes.imgFluid_small
              }
            />
          </GridItem>
        </GridItem>
      </GridContainer>
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.h3text}>What is this course?</h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p className={classes.ptext}>
                Have you tried to learn Node before? You start a new course, and
                the instructor has you installng a bunch of libraries before you
                even know what Node is or how it works. You eventually get stuck
                and reach out to the instructor, but you get no reply. you then
                clocse the course and never open it again.
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <br />

      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Q and A" {...a11yProps(2)} />
            <Tab label="Downloads" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel
          value={value}
          index={0}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <h3>About the course</h3>
          <br />
          <p className={classes.ptext}>
            Have you tried to learn Node before? You start a new course, and the
            instructor has you installng a bunch of libraries before you even
            know what Node is or how it works. You eventually get stuck and
            reach out to the instructor, but you get no reply. you then clocse
            the course and never open it again.
          </p>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <h3>Reviews</h3>
          <br />
          <p className={classes.ptext}>
            Have you tried to learn Node before? You start a new course, and the
            instructor has you installng a bunch of libraries before you even
            know what Node is or how it works. You eventually get stuck and
            reach out to the instructor, but you get no reply. you then clocse
            the course and never open it again.
          </p>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <h3>Q and A</h3>
          <br />
          <p className={classes.ptext}>
            Have you tried to learn Node before? You start a new course, and the
            instructor has you installng a bunch of libraries before you even
            know what Node is or how it works. You eventually get stuck and
            reach out to the instructor, but you get no reply. you then clocse
            the course and never open it again.
          </p>
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <h3>Downloads</h3>
          <br />
        </TabPanel>
      </div>

      <br />
      <br />
    </div>
  );
}
