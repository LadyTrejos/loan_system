import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "0 1.3rem",
    background: "linear-gradient(141deg,rgb(7 36 72) 47%,rgb(242 56 15) 164%)",
    height: `calc(100vh - 56px)`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: `calc(100vh - 48px)`,
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100vh - 64px)`,
    },
  },
  primary: {
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: "1.8rem",
  },
  text: {
    fontSize: "1rem",
    margin: 0
  }
}));

function InfoPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <h1 className={classes.title}>
          What's <span className={classes.primary}>LendingFront</span>?
        </h1>
        <p className={classes.text}>
          LendingFront is a loan system designed for businesses that need fast
          access to capital.
        </p>
        <h3>Why apply for a business loan?</h3>
        <p className={classes.text}>
          A business loan can help you make your next purchase, fund growth, or
          manage cash flow for your business.
          <br />
          Request yours now and grow your business!
        </p>
      </React.Fragment>
    </div>
  );
}

export default InfoPanel;
