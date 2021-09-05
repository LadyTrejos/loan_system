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
    background: "linear-gradient(141deg,rgb(7 36 72) 47%,rgb(242 56 15) 164%)",
    height: "100vh"
  },
  primary: {
    color: theme.palette.primary.main,
  },
}));

function InfoPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <h1>
          What's <span className={classes.primary}>LendingFront</span>?
        </h1>
        <p>
          LendingFront is a loan system designed for businesses that need fast
          access to capital.
        </p>
        <h2>Why apply for a business loan?</h2>
        <p>
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
