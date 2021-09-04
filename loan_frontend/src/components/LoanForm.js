import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: "1.75rem",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  button: {
    margin: theme.spacing(2, 2, 0, 0),
    borderRadius: "50rem",
  },
}));

function LoanForm() {
  const classes = useStyles();
  return (
    <form autoComplete="off" className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <h1 className={classes.title}>Apply now</h1>
        </Grid>
        <Grid item xs={10}>
          <TextField id="tax-id" label="Tax Id" margin="dense" fullWidth />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="business-name"
            label="Business Name"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="requested-amount"
            label="Requested Amount"
            type="number"
            margin="dense"
            fullWidth
            //   InputProps={{
            //     startAdornment: state != null ? <InputAdornment position="start">$</InputAdornment> : null,
            //   }}
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className={classes.button}
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoanForm;
