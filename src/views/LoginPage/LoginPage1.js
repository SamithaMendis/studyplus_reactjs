import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <GridContainer>
        <GridItem
          xs={12}
          sm={6}
          md={5}
          style={{ backgroundColor: "#D1D0CE", height: "100vh" }}
        >
          <div className={classes.leftside}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.studyplus}>
                  study<b>plus</b>
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.left_text}>
                  Explore the knowledge awaiting for you
                </p>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
       
        <GridItem xs={12} sm={6} md={7}>
          <form className={classes.form}>
            <GridItem xs={12} sm={12} md={12}>
              <h2>Log in</h2>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button1}
                // startIcon={
                //   <p
                //     style={{
                //       fontSize: "30px",
                //       fontWeight: "bold",
                //       marginLeft: "0",
                //       textAlign: "left",
                //     }}
                //   >
                //     G
                //   </p>
                // }
              >
                Continue with Google
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                id="outlined-helperText"
                label="Helper text"
                helperText="Some important text"
                variant="outlined"
              />
            </GridItem>

            <hr />
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
