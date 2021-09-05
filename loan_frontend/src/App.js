import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

import LoanForm from "./components/LoanForm";
import InfoPanel from "./components/InfoPanel";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  appBar:{
    backgroundColor: "#fff"
  },
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src="color_logo.svg" alt="LendingFront logo"/>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset} /> */}
      <div className={classes.root}>
        <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <InfoPanel />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <LoanForm />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
