import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { ReactComponent as Nathan } from "../../assets/nathan-mudaliar.svg";
import "./About.style.css";

export default function AboutComponent() {
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
          backgroundImage: `linear-gradient(to right, ${data?.avatarData?.color1}, ${data?.avatarData?.color2} 140%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: "32.56vw",
        }}
      >
        <Container maxWidth="lg" spacing={8} style={{ marginTop: "3vw" }}>
          <Grid
            container
            style={{
              alignContent: "center",
            }}
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Container
                style={{
                  textAlign: "center",
                }}
              >
                <Nathan
                  className="nathan-avatar"
                  style={{
                    maxWidth: "22.3vw",
                    maxHeight: "22.3vw",
                  }}
                />
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1vw",
                    marginTop: "1.2vw",
                    marginBottom: "1.2vw",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Nathan Mudaliar,</span>
                  &nbsp;
                  <span style={{ fontWeight: "300", fontStyle: "italic" }}>
                    the Cortex Copywriter
                  </span>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Container>
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "300",
                    fontSize: "1.8vw",
                    marginBlockStart: "0.8em",
                    marginBlockEnd: "1em",
                    lineHeight: 0.9,
                    color: "white",
                    backgroundColor: data?.avatarData?.color1,
                    filter: "brightness(75%)",
                    display: "inline-block",
                    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
                    padding: "10px 40px",
                  }}
                >
                  About
                </Typography>
                <Typography className="about-text">
                  {data?.avatarData?.aboutMsg1}
                </Typography>
                <Typography className="about-text">
                  {data?.avatarData?.aboutMsg2}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
