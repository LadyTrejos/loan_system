import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LoanDecision from "./LoanDecision";

const API = process.env.REACT_APP_API;

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
  const [openDecision, setOpenDecision] = useState(false);
  const [decision, setDecision] = useState("");
  const [values, setValues] = useState({
    taxId: "",
    businessName: "",
    requestedAmount: "",
  });

  const [errors, setErrors] = useState({
    taxId: "",
    businessName: "",
    requestedAmount: "",
  });

  const formIsValid = (formValues = values) => {
    validate();
    const isValid =
      formValues.taxId &&
      formValues.businessName &&
      formValues.requestedAmount &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  function handleInputChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    validate({ [name]: value });
  }

  function validate(formValues = values) {
    var temp = { ...errors };

    if ("taxId" in formValues) {
      if (
        formValues.taxId === "0" ||
        formValues.taxId === "" ||
        formValues.taxId.startsWith("-")
      ) {
        temp.taxId = "Please enter a valid tax ID";
      } else {
        temp.taxId = "";
      }
    }

    if ("businessName" in formValues) {
      temp.businessName =
        formValues.businessName === "" ? "Enter your business name" : "";
    }

    if ("requestedAmount" in formValues) {
      if (
        formValues.requestedAmount === "0" ||
        formValues.requestedAmount === "" ||
        formValues.requestedAmount.startsWith("-")
      ) {
        temp.requestedAmount = "Enter the amount of money you need";
      } else {
        temp.requestedAmount = "";
      }
    }

    setErrors({ ...temp });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formIsValid()) {
      fetch(`${API}/loan_decision`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          setDecision(data.decision);
          setOpenDecision(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <React.Fragment>
      <form
        autoComplete="off"
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
      >
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
            <TextField
              id="tax-id"
              label="Tax Id"
              name="taxId"
              margin="dense"
              color="secondary"
              type="number"
              fullWidth
              required
              error={errors.taxId !== ""}
              helperText={errors.taxId}
              value={values.taxId}
              onChange={(e) => handleInputChange(e)}
              InputProps={{
                inputProps: { min: 0 },
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="business-name"
              label="Business Name"
              name="businessName"
              margin="dense"
              color="secondary"
              fullWidth
              required
              error={errors.businessName !== ""}
              helperText={errors.businessName}
              value={values.businessName}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="requested-amount"
              label="Requested Amount"
              name="requestedAmount"
              margin="dense"
              color="secondary"
              type="number"
              fullWidth
              required
              error={errors.requestedAmount !== ""}
              helperText={errors.requestedAmount}
              value={values.requestedAmount}
              onChange={(e) => handleInputChange(e)}
              InputProps={{
                startAdornment:
                  values.requestedAmount !== "" ? (
                    <InputAdornment position="start">$</InputAdornment>
                  ) : null,
                inputProps: { min: 0, step: 0.01 },
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className={classes.button}
              type="submit"
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </form>
      <LoanDecision
        open={openDecision}
        onClose={setOpenDecision}
        decision={decision}
      />
    </React.Fragment>
  );
}

export default LoanForm;
