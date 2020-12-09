import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  gridIcon: {
    width: 95,
    height: 95,
    borderRadius: "100px",
    border: "none",
    boxSizing: "border-box",
  },
  typo: {
    color: "white",
    textAlign: "center",
  },
  gridProp: {
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-16%)",
      "& > div > *": {
        border: "3px solid black",
      },
    },
  },
}));

const AvatarEmojisComponent = React.forwardRef(
  ({ onMouseDown, id, text, IconComponent, bgColor, style }, ref) => {
    const classes = useStyles();
    return (
      <Grid item className={classes.gridProp} onMouseDown={onMouseDown}>
        <div ref={ref} id={id}>
          <IconComponent
            className={classes.gridIcon}
            style={{ backgroundColor: `${bgColor}`, ...style }}
          />
        </div>
        <Typography className={classes.typo}>{text}</Typography>
      </Grid>
    );
  }
);

export default AvatarEmojisComponent;
