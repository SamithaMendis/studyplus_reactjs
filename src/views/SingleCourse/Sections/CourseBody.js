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

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-kit-react/views/SingleCourseDetails.js";
import { Button, Card, Typography } from "@material-ui/core";

import team1 from "assets/img/faces/card-profile1-square.jpg";
import img1 from "assets/img/bg2.jpg";
import image from "assets/img/faces/avatar.jpg";
import ReactStars from "react-rating-stars-component";
import StudentReviews from "views/SingleCourse/Sections/StudentReviews";

const useStyles = makeStyles(styles);

export default function CourseBody() {
  const classes = useStyles();
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

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.h3text}>What you will learn</h2>
            </GridItem>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>
                  How to configure a basic backend server
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>
                  Build a RESTFUL API with expressJS
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>Configure routes</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>Set up controllers</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>Work with middleware</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <br />

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.h3text}>Course content</h2>
            </GridItem>
          </GridItem>
        </GridContainer>
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
        <Accordion
          style={{
            marginLeft: "-15px",
            marginRight: "-15px",
            backgroundColor: "silver",
          }}
        >
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
        <br />
      </div>
      <br />
      <br />

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.h3text}>Requirement</h2>
            </GridItem>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>Basic Javascript knowledge</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={1} md={1}>
                <input type="checkbox" value="Male" name="gender" />
              </GridItem>
              <GridItem xs={12} sm={11} md={11}>
                <p className={classes.ptext}>
                  Computer with an internet connection
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <br />

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.h3text}>Frequently bought together</h2>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridItem xs={12} sm={12} md={12}>
                  <img
                    src={team1}
                    alt="..."
                    className={
                      classes.imgRounded_small + " " + classes.imgFluid_small
                    }
                  />
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <GridItem xs={12} sm={12} md={12}>
                  <Typography
                    style={{ fontSize: "14px" }}
                    component="h6"
                    variant="h6"
                  >
                    Savannah Nguyen
                  </Typography>
                  <Typography
                    style={{ fontSize: "12px" }}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    NodeJS, Databases
                  </Typography>
                  <br />
                  <Typography
                    style={{ fontSize: "10px" }}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    434433 students
                  </Typography>
                  <br />
                  <ReactStars count={5} size={24} activeColor="#ffd700" />,
                </GridItem>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>

      <br />
      <br />

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <h2 className={classes.h3text}>Instructor</h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classes.instructorName}>Dianne Russel</p>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classes.h4text}>
              I am your web developer instructor!!!
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <p className={classes.ptext}>
              Instructor. Instructor is the title for an individual responsible
              for teaching students in a particular subject area. Instructors
              teach courses in their area of expertise
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.marginLeft}>
            <img
              src={image}
              alt="..."
              style={{ width: "200px", marginTop: "-100px" }}
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <p className={classes.ptext} style={{ fontWeight: "bold" }}>
              2655266 students | 21 courses
            </p>
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2 className={classes.h3text}>Student Reviews</h2>
      <br />
      <StudentReviews />
      <br />
      <StudentReviews />
      <br />
      <StudentReviews />
      <br />
      <StudentReviews />
      <br />
    </div>
  );
}
