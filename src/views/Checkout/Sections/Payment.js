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
import { Button, Card, InputAdornment, TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import team1 from "assets/img/faces/card-profile1-square.jpg";
import img1 from "assets/img/bg2.jpg";
import image from "assets/img/faces/avatar.jpg";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const countries = [
  {
    value: "SL",
    label: "Sri Lanka",
  },
  {
    value: "IN",
    label: "India",
  },
];

export default function Payment() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("SL");

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <br />
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classes.h3text}>Select payment Method</h2>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  id="countryid"
                  select
                  style={{ width: "400px" }}
                  label="Billing country"
                  value={country}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your country"
                  variant="outlined"
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  style={{ width: "600px" }}
                  id="outlined-basic"
                  label="Cardholder name"
                  variant="outlined"
                  placeholder="Cardholder name"
                  value=""
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">Kg</InputAdornment>
                  //   ),
                  // }}
                />
              </GridItem>
              <br />
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  style={{ width: "600px" }}
                  id="outlined-basic"
                  label="Card number"
                  variant="outlined"
                  placeholder="Card number"
                  value=""
                />
              </GridItem>
              <br />

              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <TextField
                      style={{ width: "300px" }}
                      id="outlined-basic"
                      label="Expire date"
                      variant="outlined"
                      placeholder="Expire date"
                      value=""
                    />
                  </GridItem>
                  <br />
                  <GridItem xs={12} sm={4} md={4}>
                    <TextField
                      style={{ width: "300px" }}
                      id="outlined-basic"
                      label="Secret code(CVV)"
                      variant="outlined"
                      placeholder="Secret code(CVV)"
                      value=""
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <br />

              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Button
                    color="primary"
                    block
                    className={classes.addtocartbtn}
                  >
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
