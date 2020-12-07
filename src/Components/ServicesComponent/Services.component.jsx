import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { ReactComponent as Service6 } from "../../assets/services-6.svg";
import { ReactComponent as Service7 } from "../../assets/services-7.svg";
import { ReactComponent as Service5 } from "../../assets/services-5.svg";
import "./Services.style.css";

export default function BodyComponent() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          width: "100%",
          position: "relative",
          top: "47.9vw",
          backgroundImage: `linear-gradient(to right, ${data?.color2} -10%, ${data?.color1})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: "105vw",
          maxHeight: "165vw",
        }}
      >
        <Container maxWidth="lg" spacing={8}>
          <Grid
            container
            style={{
              alignContent: "center",
            }}
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Service6
                style={{
                  maxWidth: "70vw",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  fontSize: "3.255vw",
                  padding: 0,
                  margin: 0,
                  marginBlockStart: "0.8em",
                  marginBlockEnd: 50,
                  lineHeight: 0.9,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                UX Writing
              </Typography>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                  fontSize: "1.15vw",
                  padding: 0,
                  margin: 0,
                  lineHeight: 1.05,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                {data?.serviceMsg1}
              </Typography>
              <Grid
                container
                className="item-listing"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  marginBlockStart: "24px",
                  color: "white",
                }}
              >
                <div>
                  <span>•</span>Microcopy
                </div>
                <div>
                  <span>•</span>Taxonomy & labeling
                </div>
                <div>
                  <span>•</span>Chatbots
                </div>
                <div>
                  <span>•</span>User Research
                </div>
                <div>
                  <span>•</span>Content Style Guide
                </div>
                <div>
                  <span>•</span>User Testing
                </div>
                <div>
                  <span>•</span>Design Principles
                </div>
                <div>
                  <span>•</span>Prototype
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" spacing={8}>
          <Grid
            container
            style={{
              alignContent: "center",
            }}
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  fontSize: "3.255vw",
                  padding: 0,
                  margin: 0,
                  marginBlockStart: "0.8em",
                  marginBlockEnd: 50,
                  lineHeight: 0.9,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                Website Copywriting
              </Typography>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                  fontSize: "1.15vw",
                  padding: 0,
                  margin: 0,
                  lineHeight: 1.05,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                {data?.serviceMsg2}
              </Typography>
              <Grid
                container
                className="item-listing"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  marginBlockStart: "24px",
                  color: "white",
                }}
              >
                <div>
                  <span>•</span>Information Architecture
                </div>
                <div>
                  <span>•</span>Wireframes
                </div>
                <div>
                  <span>•</span>Competitor Analysis
                </div>
                <div>
                  <span>•</span>On-page SEO
                </div>
                <div>
                  <span>•</span>Off-page SEO
                </div>
                <div>
                  <span>•</span>USP/UVP
                </div>
                <div>
                  <span>•</span>Landing Page
                </div>
                <div>
                  <span>•</span>Sales Letter
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Service7
                style={{
                  maxWidth: "70vw",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" spacing={8}>
          <Grid
            container
            style={{
              alignContent: "center",
            }}
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Service5
                style={{
                  maxWidth: "70vw",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  fontSize: "3.255vw",
                  padding: 0,
                  margin: 0,
                  marginBlockStart: "0.8em",
                  marginBlockEnd: 50,
                  lineHeight: 0.9,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                Content Writing
              </Typography>
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                  fontSize: "1.15vw",
                  padding: 0,
                  margin: 0,
                  lineHeight: 1.05,
                  color: "white",
                  letterSpacing: 0,
                }}
              >
                {data?.serviceMsg3}
              </Typography>
              <Grid
                container
                className="item-listing"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  marginBlockStart: "24px",
                  color: "white",
                }}
              >
                <div>
                  <span>•</span>Headlines & Taglines
                </div>
                <div>
                  <span>•</span>Content Strategy
                </div>
                <div>
                  <span>•</span>Blogs & Articles
                </div>
                <div>
                  <span>•</span>Social Media Content
                </div>
                <div>
                  <span>•</span>Video Scripts
                </div>
                <div>
                  <span>•</span>eDMs & Newsletters
                </div>
                <div>
                  <span>•</span>Case Studies
                </div>
                <div>
                  <span>•</span>Whitepapers
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
