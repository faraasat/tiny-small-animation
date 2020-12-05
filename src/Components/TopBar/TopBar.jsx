import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { TopBarAccordian } from "../../listing";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  appBarStyle: {
    backgroundImage:
      "linear-gradient(135deg, rgb(88, 30, 189), rgb(205, 2, 189))",
    minHeight: 60,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyle}>
        <TopBarAccordian />
      </AppBar>
    </div>
  );
}
