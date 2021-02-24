import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const popularStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
  achievegoalListText1: {
    fontSize: "22px",
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  achievegoalListText2: {
    fontSize: "16px",
    color: "black",
    textAlign: "left",
  },
  achievegoalListText3: {
    fontSize: "26px",
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  makeChangeText: {
    fontSize: "45px",
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },
  imgFluid_small: {
    maxWidth: "100%",
    borderRadius: "6px !important",
  },
  signupbtn: {
    maxWidth: "100%",
    borderRadius: "6px !important",
  },
};

export default popularStyle;
