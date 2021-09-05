import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  message: {
    fontSize: "1.5rem",
  },
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: "6rem",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
}));

function LoanDecision(props) {
  const { onClose, open, decision, businessName } = props;
  const classes = useStyles();

  function handleClose() {
    onClose(false);
  }

  function getMessage() {
    var icon, result, message;
    if (decision === "Approved") {
      icon = (
        <CheckCircleTwoToneIcon
          className={classes.animatedItem}
          style={{ color: "#71be35" }}
        />
      );
      result = `${businessName}, your application has been approved!`
      message =
      `Congratulations ${businessName}! the loan will be funded to your account.`;
    } else if (decision === "Undecided") {
      icon = (
        <InfoTwoToneIcon
          className={classes.animatedItem}
          style={{ color: "#ffb702" }}
        />
      );
      result = "Ops! We need more information to decide";
      message =
        "Please contact us at (212) 235-7378 to continue the process.";
    } else if (decision === "Declined") {
      icon = (
        <CancelTwoToneIcon
          className={classes.animatedItem}
          style={{ color: "#ff623e" }}
        />
      );
      result = "Your application has been declined";
      message = "Do not worry! You can try again in the future.";
    }

    return (
      <React.Fragment>
        {icon}
        <h1 className={classes.message}>{result}</h1>
        <p>{message}</p>
      </React.Fragment>
    );
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="loan-decision-result"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className={classes.closeButton}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialog}>{getMessage()}</DialogContent>
    </Dialog>
  );
}

export default LoanDecision;
