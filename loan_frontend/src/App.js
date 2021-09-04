import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

import LoanForm from "./components/LoanForm";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  toolbar: {
    width: "100%",
    maxWidth: "185px",
  },
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="transparent">
        <Toolbar className={classes.toolbar}>
          <img src="color_logo.svg" />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <LoanForm />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
