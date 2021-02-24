/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/categories"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Categories
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/topcourses"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Top Courses
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/startteaching"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Start Teaching
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/help"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Help
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color="transparent"
          target="_blank"
          className={classes.navLink_Login}
        >
          Login
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/signup"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Sign Up
        </Button>
      </ListItem>
    </List>
  );
}
