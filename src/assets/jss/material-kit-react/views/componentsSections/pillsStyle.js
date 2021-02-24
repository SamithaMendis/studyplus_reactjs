import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
  },
  container: {
    zIndex: "12",
    color: "#000000",
    ...container,
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  imgFluid: {
    maxWidth: "100%",
    height: "200px",
    width: "200px",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },

  imgFluid_small: {
    maxWidth: "100%",
    height: "140px",
    width: "200px",
  },
  imgRounded_small: {
    borderRadius: "6px !important",
  },
  btnStyle: {
    background: "purple",
    color: "white",
    fontSize: "12px",
    maxWidth: "200px",
    maxHeight: "40px",
    minWidth: "100px",
    minHeight: "30px",
  },
};

export default pillsStyle;
