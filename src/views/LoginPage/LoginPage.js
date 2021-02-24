import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import img1 from "assets/img/study-bg.png";
import Footer from "components/Footer/Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "none",
  },
  studyplus: {
    fontSize: "30px",
  },
  left_text: {
    marginTop: "50px",
    fontSize: "30px",
    fontWeight: "bold",
  },

  leftside: {
    marginLeft: "200px",
    marginTop: "100px",
  },
  gbtn: {
    fontSize: "30px",
    textAlign: "left",
  },
  button1: {
    backgroundColor: "darkblue",
    width: "60%",
    fontSize: "20px",
    textTransform: "none",
  },
}));
export default function SignIn() {
  const classes = useStyles();
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
              <GridItem xs={12} sm={12} md={12}>
                <img src={img1} alt="..." style={{ width: "100%" }} />
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>

        <GridItem xs={12} sm={6} md={7}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Log in
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>{/* <Copyright /> */}</Box>
          </Container>
        </GridItem>
      </GridContainer>
      <Footer />
    </div>
  );
}
