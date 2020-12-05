import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { RainbowText } from "../../listing";
import { Container, Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { toast } from "react-toastify";
import InfoIcon from "@material-ui/icons/Info";
import { Icon } from "@material-ui/core";
import { ReactComponent as CommunityIcon } from "../../assets/community.svg";
import { ReactComponent as CorporateIcon } from "../../assets/corporate.svg";
import { ReactComponent as TechnologyIcon } from "../../assets/technology.svg";
import { ReactComponent as LuxuryIcon } from "../../assets/luxury.svg";
import { ReactComponent as EntertainmentIcon } from "../../assets/entertainment.svg";

const Accordion = withStyles({
  root: {
    backgroundColor: "rgba(255,255,255,0)",
    width: "100%",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    maxWidth: "100%",
    minHeight: 60,
    backgroundColor: "rgba(255,255,255,0) !important",
    "&$expanded": {
      minHeight: 60,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "block",
    padding: theme.spacing(3),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  textProps: {
    letterSpacing: 0.6,
    margin: "0 auto",
    cursor: "pointer",
  },
  icon: {
    backgroundColor: "rgba(253, 253, 253, 0.25)",
    border: "1px solid rgba(253, 253, 253, 1)",
    width: 38,
    height: 38,
  },
  iconAlign: {
    marginRight: "1%",
  },
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
      transform: "translateY(-15px)",
      "& > div > *": {
        border: "2px solid black",
      },
    },
    "&:active": {
      transform: "translateY(-9px)",
    },
  },
}));

const handleIconClick = () => {
  toast.info(
    <div>
      <Icon component={InfoIcon} style={{ marginTop: 7, fontSize: 25 }} />
      &nbsp;&nbsp;&nbsp;Functionality Coming Soon
    </div>,
    {
      position: "bottom-right",
      toastId: 1,
    }
  );
};

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            variant="subtitle1"
            color="inherit"
            className={classes.textProps}
          >
            <RainbowText>Switch experience▾</RainbowText>
          </Typography>
          <div className={classes.iconAlign}>
            <IconButton
              color="inherit"
              aria-label="menu"
              className={classes.icon}
              onClick={handleIconClick}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="md">
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item className={classes.gridProp}>
                  <div>
                    <CommunityIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(74,195,174)" }}
                      id="comm"
                    />
                  </div>
                  <Typography className={classes.typo}>Community</Typography>
                </Grid>
                <Grid item className={classes.gridProp}>
                  <div>
                    <CorporateIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(59,101,243)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Corporate</Typography>
                </Grid>
                <Grid item className={classes.gridProp}>
                  <div>
                    <TechnologyIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(255,28,244)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Technology</Typography>
                </Grid>
                <Grid item className={classes.gridProp}>
                  <div>
                    <LuxuryIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(255,227,177)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Luxury</Typography>
                </Grid>
                <Grid item className={classes.gridProp}>
                  <div>
                    <EntertainmentIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(255,49,55)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>
                    Entertainment
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
