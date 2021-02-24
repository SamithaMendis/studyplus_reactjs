/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import SimpleReactFooter from "simple-react-footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <AppBar position="static" color="primary">
      <br />
      <Container maxWidth="md">
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.studyplustext}>
                  study<b>plus</b>
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>
                  Explore the knowledge awaiting for you
                </p>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={3} md={3}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Company</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>About us</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Contact us</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Support</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Blog</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Carriers</p>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={3} md={3}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>SERVICE</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Login</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Sign up</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>my course</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <p className={classes.navtext}>Start teaching</p>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Container>
    </AppBar>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
