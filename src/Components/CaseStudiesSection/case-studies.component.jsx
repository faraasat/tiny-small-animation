import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { CaseStudyCardComponent } from "../../listing";

export default function CaseStudiesComponent() {
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
          backgroundImage: `linear-gradient(to right, ${data?.avatarData?.color1}, ${data?.avatarData?.color2} 200%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: "80vw",
          maxHeight: "100vh",
        }}
      >
        <Grid
          container
          style={{
            alignText: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "300",
              fontSize: "1.8vw",
              marginBlockStart: "1em",
              marginBlockEnd: "-3em",
              lineHeight: 1,
              color: "white",
              backgroundColor: data?.avatarData?.color1,
              filter: "brightness(70%)",
              display: "inline-block",
              boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
              padding: "10px 40px",
            }}
          >
            Case Studies
          </Typography>
        </Grid>
        <Grid container>
          <Container maxWidth="lg">
            <Container maxWidth="lg">
              <Container maxWidth="lg">
                <Container maxWidth="lg">
                  <Container
                    maxWidth="lg"
                    spacing={8}
                    style={{ marginTop: "3vw" }}
                  >
                    <Grid
                      container
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      spacing={4}
                    >
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <CaseStudyCardComponent
                          head="Ausbeds: Scripted Chatbot"
                          subHead="Cortex Copywriter"
                          style={{
                            background:
                              "url(../../assets/blog_stock-10.jpg) no-repeat",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <CaseStudyCardComponent
                          head="Balze Research: Rebrand"
                          subHead="Cortex Copywriter"
                          style={{
                            background:
                              "url(../../assets/blog_stock-5.jpg) no-repeat",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <CaseStudyCardComponent
                          bigHead="COMING IN 2020 - "
                          smallHead="StartScale: 'Uber of Marketing"
                          style={{
                            background:
                              "url(../../assets/blog_stock-6.jpg) no-repeat",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
