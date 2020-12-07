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
            color1: "rgb(75,6,193)",
            color2: "rgb(206, 2, 189)",
            sliderTop: "rgb(142, 95, 230)",
            sliderBottom: "rgb(75,6,193)",
            mainLine:
              "Enhance your communications with psychology-based copywriting and UX writing",
            btnColor1: "rgb(35, 255, 219)",
            btnColor2: "rgb(27, 93, 191)",
            serviceMsg1:
              "I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.",
            serviceMsg2:
              "Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.",
            serviceMsg3:
              "Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.",
          };
          break;
        case "corp":
          themeColor = {
            id: "corp",
            color1: "rgb(16, 29, 143)",
            color2: "rgb(0, 114, 212)",
            sliderTop: "rgb(0, 152, 198)",
            sliderBottom: "rgb(16, 29, 143)",
            mainLine:
              "Science-backed copywriting built for conversion and efficient user experiences",
            btnColor1: "rgb(255, 231, 18)",
            btnColor2: "rgb(217, 33, 4)",
            serviceMsg1:
              "Transform your apps and digital interfaces with user friendly microcopy for notifications, error messages, empty states, CTAs, sign-up forms, and more. I am also responsible for conducting research, user documentation, style guides, and newsletters for customers.",
            serviceMsg2:
              "Through a genuine, consultative relationship, I will take the time to learn your brand philosophy and develop original website content that achieves your business objectives. A solid content strategy will provide the foundation for search engine optimization (SEO), improving your customers' online experience, and driving traffic to your website.",
            serviceMsg3:
              "You may not have the time or resources to create content that offers valuable information and solves your customers' problems. I specialize in writing functional content with the elements of lasting dialog – what your business stands for and what it contributes to the world – that will grow your audience and increase sales.",
          };
          break;
        case "luxu":
          themeColor = {
            id: "luxu",
            color1: "rgb(255, 101, 173)",
            color2: "rgb(255, 35, 74)",
            sliderTop: "rgb(255, 101, 174)",
            sliderBottom: "rgb(255, 35, 74)",
            mainLine: "The art of precision copywriting and smooth interfaces",
            btnColor1: "rgb(245, 227, 166)",
            btnColor2: "rgb(255, 59, 61)",
            serviceMsg1:
              "My minimalist UX aesthetic is a statement of sophisticated quality and bespoke elegance for your precious audience. I embrace a strong lexical style and silky syntax in my journey with design teams to create breathtaking user experiences from beginning to end.",
            serviceMsg2:
              "Your ornate website deserves to be more than a transactional exchange. It would be my pleasure to titillate your audience with seductive search engine optimized web copy, stimulating sales-boosting stories, and artful articles. I can craft a powerful message that takes your audience on an evocative journey all the way through awareness to action.",
            serviceMsg3:
              "Allow me to bring the fine art of copywriting and unique emotions to your story. I can help distinguish your brand with the mystique that represents your customers and everything they aspire to be. Prestigious content is the first step in curating a rewarding and unforgettable brand experience.",
          };
          break;
        case "ente":
          themeColor = {
            id: "ente",
            color1: "rgb(17, 17, 17)",
            color2: "rgb(51, 51, 51)",
            sliderTop: "rgb(51, 51, 51)",
            sliderBottom: "rgb(17, 17, 17)",
            mainLine:
              "I wield wicked words wisely without wasting a single letter",
            btnColor1: "rgb(2, 255, 217)",
            btnColor2: "rgb(2, 118, 79)",
            serviceMsg1:
              "UX is better than s#x. It's not the size of your microcopy that matters, it’s how you use it. Flex your UX with little words that pack a punch. I dive into your users’ psychological labyrinth to figure out what they might think, feel, hear, see, say, and do. This ensures your products always have a smile on their interface.",
            serviceMsg2:
              "My tools of razor-sharp rhetoric, lovely linguistics, and potent psychology turn your website into a fully charged digital powerhouse that brings in new clients and spanks your competitors. You deserve words sweeter than dopamine. I’m 100% that web copy daddy.",
            serviceMsg3:
              "As a former neuroscientist, I know the sorcery of crafting words that ignite minds, warm hearts, and move souls. My writing penetrates your audience on a ‘dopamine’ level. I offer deeply stimulating stories and succulent content more addictive than chocolate cheeseburgers.",
          };
          break;
        case "comm":
          themeColor = {
            id: "comm",
            color1: "rgb(255, 149, 61)",
            color2: "rgb(75, 195, 174)",
            sliderTop: "rgb(45, 230, 220)",
            sliderBottom: "rgb(75, 195, 174)",
            mainLine:
              "Celebrate your unique voice with conversational copy and practical UX writing",
            btnColor1: "rgb(233, 30, 99)",
            btnColor2: "rgb(243, 87, 75)",
            serviceMsg1:
              "Build human-centered solutions and emotional connections for your brand. UX writing breathes life into a product. It’s more than notifications and labels. My job is to design responsibly and champion accessibility. I collaborate with design teams to mould memorable interactions.",
            serviceMsg2:
              "I’m on mission to help you increase website traffic and leads, reduce bounce rate, and strengthen your brand. While my search engine optimized (SEO) copy will focus on satisfying Big Brother Google, SEO will come secondary to writing for humans and making your content authoritative so it gains interactions, links, and referrals.",
            serviceMsg3:
              "In this age of content overload, authentic connections are key for your brand to engage customers and offer true value. By weaving your unique voice, values, narrative, and identity through all your content, I help your brand connect with loyal fans.",
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
