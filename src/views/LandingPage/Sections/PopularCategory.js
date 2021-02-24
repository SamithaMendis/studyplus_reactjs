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

export default function PopularCategory() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Popular Categories</h2>
      <p className={classes.title} style={{fontSize: '16px'}}>Start  browsing our 100+ categories from development to music to self-help. You will never have enough.</p>
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Development
                
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Music
                
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Business
                
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Engineering
                
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Finance
                
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Self-help
                
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
          <Button
            color="primary"
            block
            style={{maxWidth: '200px', maxHeight: '40px', minWidth: '100px', minHeight: '30px'}}
          >
            Browse All
          </Button>

      </div>
    </div>
  );
}
