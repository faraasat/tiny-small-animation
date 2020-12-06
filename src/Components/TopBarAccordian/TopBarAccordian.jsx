import React, { useContext, useEffect, useRef, useState } from "react";
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
import { rubberBand } from "@wellyshen/use-web-animations";
import { DataContext } from "../../data/data.context";
import "./TopBarAccordian.css";

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
      transform: "translateY(-16%)",
      "& > div > *": {
        border: "3px solid black",
      },
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

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value.current;
  });
  return ref.current;
}

export default function TopBarAccordian() {
  const community = useRef(null);
  const technology = useRef(null);
  const corporate = useRef(null);
  const luxury = useRef(null);
  const entertainment = useRef(null);
  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  const [active, setActive] = useState(technology);
  const preVal = usePrevious(active);
  const { ThemeData } = useContext(DataContext);

  useEffect(() => {
    preVal?.parentElement?.classList?.remove("char-active");
    active.current.parentElement.classList.add("char-active");
    active.current.animate(rubberBand.keyframes, rubberBand.timing);
    if (active?.current?.id !== preVal?.id) {
      let themeColor;
      switch (active.current.id) {
        case "tech":
          themeColor = {
            id: "tech",
            color1: "rgb(88, 30, 189)",
            color2: "rgb(205, 2, 189)",
            sliderTop: "rgb(142, 95, 230)",
            sliderBottom: "rgb(88, 30, 189)",
          };
          break;
        case "corp":
          themeColor = {
            id: "corp",
            color1: "rgb(17, 30, 144)",
            color2: "rgb(0, 114, 212)",
            sliderTop: "rgb(61, 79, 219)",
            sliderBottom: "rgb(16, 29, 143)",
          };
          break;
        case "luxu":
          themeColor = {
            id: "luxu",
            color1: "rgb(255, 101, 173)",
            color2: "rgb(255, 36, 75)",
            sliderTop: "rgb(255, 101, 174)",
            sliderBottom: "rgb(255, 35, 74)",
          };
          break;
        case "ente":
          themeColor = {
            id: "ente",
            color1: "rgb(21, 21, 21)",
            color2: "rgb(51, 51, 51)",
            sliderTop: "rgb(68, 68, 68)",
            sliderBottom: "rgb(21, 21, 21)",
          };
          break;
        case "comm":
          themeColor = {
            id: "comm",
            color1: "rgb(255, 149, 61)",
            color2: "rgb(75, 195, 174)",
            sliderTop: "rgb(45, 230, 220)",
            sliderBottom: "rgb(75, 195, 174)",
          };
          break;
        default:
          break;
      }
      ThemeData(themeColor);
    }
  }, [active, preVal, ThemeData]);

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
                <Grid
                  item
                  className={classes.gridProp}
                  onMouseDown={() => setActive(community)}
                >
                  <div ref={community} id="comm">
                    <CommunityIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(74,195,174)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Community</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.gridProp}
                  onMouseDown={() => setActive(corporate)}
                >
                  <div ref={corporate} id="corp">
                    <CorporateIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(59,101,243)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Corporate</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.gridProp}
                  onMouseDown={() => setActive(technology)}
                >
                  <div ref={technology} id="tech">
                    <TechnologyIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(255,28,244)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Technology</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.gridProp}
                  onMouseDown={() => setActive(luxury)}
                >
                  <div ref={luxury} id="luxu">
                    <LuxuryIcon
                      className={classes.gridIcon}
                      style={{ backgroundColor: "rgb(255,227,177)" }}
                    />
                  </div>
                  <Typography className={classes.typo}>Luxury</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.gridProp}
                  onMouseDown={() => setActive(entertainment)}
                >
                  <div ref={entertainment} id="ente">
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
