import React, { useContext, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { TopBarAccordian } from "../../listing";
import { DataContext } from "../../data/data.context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  appBarStyle: {
    minHeight: 60,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.backgroundImage = `linear-gradient(90deg, ${data?.color1}, ${data?.color2})`;
  }, [data]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyle} ref={ref}>
        <TopBarAccordian />
      </AppBar>
    </div>
  );
}
