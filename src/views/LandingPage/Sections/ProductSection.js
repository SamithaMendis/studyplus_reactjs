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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button, Card } from "@material-ui/core";

import team1 from "assets/img/faces/card-profile1-square.jpg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>

      <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer> 
            <h3 className={classes.title}>The world's largest selection of courses</h3>
            <p className={classes.title}>Get educated by world's top experts. Sign up and explore the knowledge awaiting for you.</p>
            </GridContainer>

            <GridItem xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
          </GridItem>

          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                  title="Expert Instructors"
                  description="The experts from all over the world. Best education you can ever get."
                  icon={Star}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                  title="Lifetime access"
                  description="Get lifetime courses to your courses, anytime, anywhere!"
                  icon={AccessAlarm}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                  title="Industry Standards"
                  description="All courses are carefully made by experts and reviewed by the staff."
                  icon={School}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                  title="Over 50000+ courses"
                  description="Courses from various categories. New courses added everyday."
                  icon={MenuBook}
                  iconColor="info"
                  vertical
                />
              </GridItem>
            </GridContainer>
            <div className={classes.section}>
              <Button
                className={classes.section}
                color="primary"
                block
                style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px'}}
              >
              View Courses
              </Button>
            </div>
          </GridItem>
     
      </GridContainer>
      
        
      
      </div>
    </div>
  );
}
