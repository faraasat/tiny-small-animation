import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import "./review-section-card.style.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Icon,
  Typography,
} from "@material-ui/core";
import { DataContext } from "../../data/data.context";

export default function ReviewSectionCardComponent({
  svgImage,
  title,
  name,
  revs,
  detail1,
  detail2
}) {
  const { data } = useContext(DataContext);
  const reviews = [
    revs?.split("|")[0],
    revs?.split("|")[1],
    revs?.split("|")[2],
  ];
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className="review-section-accordion"
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        className="review-section-accordion-summary"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Card className="review-section-card">
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Icon
                component={svgImage}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `linear-gradient(to right, ${data?.avatarData?.color2}-100%, ${data?.avatarData?.color1} 300%)`,
                }}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "inline-block",
                }}
                className="review-section-typo"
              >
                <Typography className="review-section-typo-1">
                  {name}
                </Typography>
                <Typography className="review-section-typo-2">
                  {title}
                </Typography>
                <Typography className="review-section-typo-3">
                  "{reviews[0]}" <br />
                  "{reviews[1]}" <br />
                  "{reviews[2]}" <br />
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              style={{
                backgroundColor: "#050925",
                color: "#fff",
                textAlign: "center",
                display: "block",
                width: "100%",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Show Full Testimonial
            </Typography>
          </Grid>
        </Card>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{padding: 30}}>
            <p>"{detail1}"</p>
            <p>"{detail2}"</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
