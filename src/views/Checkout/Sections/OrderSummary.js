import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/SingleCourseDetails.js";
import { Button, Card } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function OrderSummary() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <GridContainer style={{ marginLeft: "10px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <h3 className={classes.title}>Order summary</h3>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer style={{ marginLeft: "10px", fontWeight: "bold" }}>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>Original price</p>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>$39.99</p>
        </GridItem>
      </GridContainer>
      <GridContainer style={{ marginLeft: "10px", fontWeight: "bold" }}>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>Savings</p>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>$9.99</p>
        </GridItem>
      </GridContainer>
      <GridContainer style={{ marginLeft: "10px" }}>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>Applied coupon</p>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <p className={classes.raisedCardText2}>SKKKSJSA</p>
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr></hr>
      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer>
            <h3 className={classes.h3text}>Total</h3>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer>
            <h3 className={classes.h3text}>$30.00</h3>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer style={{ marginLeft: "20px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.ptext}>
            By clicking the complete payment button, you agree to our term abd
            privacy policy
          </h3>
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer style={{ marginLeft: "-20px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="primary" block className={classes.buynowbtn}>
            Complete payment
          </Button>
        </GridItem>
      </GridContainer>
      <br />
      <br />
    </div>
  );
}
