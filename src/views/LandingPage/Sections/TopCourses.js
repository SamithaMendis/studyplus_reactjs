import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { LibraryBooks } from "@material-ui/icons";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import team1 from "assets/img/faces/avatar.jpg";
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles(styles);

export default function TopCourses() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h3 className={classes.title}>Top Courses</h3>
                <p>
                  Explore our large selection of courses. Taught by expert
                  instructions around the world. Sign-up and see the difference!
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <br />
                <br />
                <br />
                <Button color="primary" block>
                  Explore Courses
                </Button>
              </GridItem>
            </GridContainer>
          </div>
          <GridContainer>
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
      </div>
    </div>
  );
}
