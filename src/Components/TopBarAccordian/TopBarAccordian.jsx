import React, { useContext, useEffect, useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { RainbowText, AvatarEmojisComponent } from "../../listing";
import { Container, Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { toast } from "react-toastify";
import InfoIcon from "@material-ui/icons/Info";
import { Icon } from "@material-ui/core";
import "./TopBarAccordian.css";
import { DataContext } from "../../data/data.context";
import { rubberBand } from "@wellyshen/use-web-animations";
import dataFile from "../../data/data.file";
import { ReactComponent as CommunityIcon } from "../../assets/community.svg";
import { ReactComponent as CorporateIcon } from "../../assets/corporate.svg";
import { ReactComponent as TechnologyIcon } from "../../assets/technology.svg";
import { ReactComponent as LuxuryIcon } from "../../assets/luxury.svg";
import { ReactComponent as EntertainmentIcon } from "../../assets/entertainment.svg";

const Accordion = withStyles({
  root: {
    backgroundColor: "rgba(255,255,255,0)",
    boxShadow: "0px 0px 10px 3px rgba(0,0,0,0)",
    width: "100%",
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
    boxShadow: "0px 0px 15px 3px rgba(0,0,0,0)",
    maxWidth: "100%",
    minHeight: "4vw",
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
  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  const community = useRef(null);
  const technology = useRef(null);
  const corporate = useRef(null);
  const luxury = useRef(null);
  const entertainment = useRef(null);
  const [active, setActive] = useState(technology);
  const preVal = usePrevious(active);
  const { ThemeData } = useContext(DataContext);

  useEffect(() => {
    preVal?.parentElement?.classList?.remove("char-active");
    active?.current?.parentElement?.classList?.add("char-active");
    active?.current?.animate(rubberBand.keyframes, rubberBand.timing);
    if (active?.current?.id !== preVal?.id) {
      ThemeData(dataFile(active?.current?.id));
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
                <AvatarEmojisComponent
                  ref={community}
                  id="comm"
                  onMouseDown={() => setActive(community)}
                  text="Community"
                  IconComponent={CommunityIcon}
                  bgColor="rgb(74,195,174)"
                />
                <AvatarEmojisComponent
                  ref={corporate}
                  id="corp"
                  onMouseDown={() => setActive(corporate)}
                  text="Corporate"
                  IconComponent={CorporateIcon}
                  bgColor="rgb(59,101,243)"
                />
                <AvatarEmojisComponent
                  ref={technology}
                  id="tech"
                  onMouseDown={() => setActive(technology)}
                  text="Technology"
                  IconComponent={TechnologyIcon}
                  bgColor="rgb(255,28,244)"
                />
                <AvatarEmojisComponent
                  ref={luxury}
                  id="luxu"
                  onMouseDown={() => setActive(luxury)}
                  text="Luxury"
                  IconComponent={LuxuryIcon}
                  bgColor="rgb(255,227,177)"
                />
                <AvatarEmojisComponent
                  ref={entertainment}
                  id="ente"
                  onMouseDown={() => setActive(entertainment)}
                  text="Entertainment"
                  IconComponent={EntertainmentIcon}
                  bgColor="rgb(255,49,55)"
                />
              </Grid>
            </Grid>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
