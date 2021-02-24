import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/popularStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { LibraryBooks } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function AchieveGoalsSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>We will help you to achieve your goal</h2>
      <p className={classes.title} style={{ fontSize: "16px" }}>
        We are dedicated to help you to achieve yur goals and dreams
      </p>
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}>
                <p className={classes.achievegoalListText1}>01</p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText1}>Discover</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}></GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText2}>
                  Discover what you love. what you are passionate about.
                  Thousands of skills to choose choose from. And start building
                  your wonderful skills.
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}>
                <p className={classes.achievegoalListText1}>02</p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText1}>Learn</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}></GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText2}>
                  Learn from the best. No more time wasting . Enhance your
                  knowledge and learn something new, everyday. Become a new
                  person.
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}>
                <p className={classes.achievegoalListText1}>03</p>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText1}>Experience</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}></GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}></GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <p className={classes.achievegoalListText2}>
                  Experience the difference. Feel what you love and enjoy your
                  education. No more boring school like education. Get exited
                  and start learning today
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
      </div>

      <br />
      <br />
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.achievegoalListText3}>
                  Listen to our student success stories
                </p>
                <p className={classes.achievegoalListText2}>
                  Listen to our student success stories Explore our large
                  selection of courses. Taught by expert instructions around the
                  world. Sign-up and see the difference! ries Listen to our
                  student success stories Listen to our student success stories
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <img
                  src={team2}
                  alt="..."
                  className={
                    classes.imgRounded_small + " " + classes.imgFluid_small
                  }
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <br />
      </div>

      <div>
        <br />
        <br />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.makeChangeText}>Make the change today!</p>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <Button color="primary" block className={classes.signupbtn}>
                      Sign Up
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Button color="primary" block className={classes.signupbtn}>
                      Start Teaching
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
