/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import SimpleReactFooter from "simple-react-footer";


const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });


  const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const title = "StudyPlus";
  const columns = [
    {
        title: "Company",
        resources: [
            {
                name: "About us",
                link: "/"
            },
            {
                name: "Contact us",
                link: "/"
            },
            {
                name: "Support",
                link: "/"
            },
            {
                name: "Blog",
                link: "/"
            },
            {
                name: "Carries",
                link: "/"
            }
        ]
    },
    {
        title: "Service",
        resources: [
            {
                name: "Login",
                link: "/"
            },
            {
                name: "Sign up",
                link: "/"
            },
            {
                name: "My courses",
                link: "/"
            },
            {
                name: "Start teaching",
                link: "/"
            }
        ]
    }
 ];

  return (
    <SimpleReactFooter
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook=""
        twitter=""
        instagram=""
        youtube="?"
        pinterest=""
        copyright="CodeMax"
        iconColor="white"
        backgroundColor="MidnightBlue"
        fontColor="white"
        copyrightColor="darkgrey"
    />

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
