import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { CaseStudyCardComponent } from "../../listing";

export default function BlogComponent() {
  const { data } = useContext(DataContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "auto !important",
      }}
    >
      <div>
        <Grid
          item
          xs={12}
          style={{
            width: "100%",
            position: "relative",
            top: "47.9vw",
            backgroundImage: `linear-gradient(to right, ${data?.avatarData?.color2}, ${data?.avatarData?.color1} 300%)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
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
                marginBlockStart: "5.3em",
                marginBlockEnd: "2.4em",
                lineHeight: 1,
                color: "white",
                backgroundColor: data?.avatarData?.color2,
                filter: "brightness(70%)",
                display: "inline-block",
                boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
                padding: "10px 40px",
              }}
            >
              Blogs
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
                      style={{ marginTop: "3vw", marginBlockEnd: "11em" }}
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
                            head="What is digital copywriting? The evolution of copy from Mad Men to UX writing and beyond"
                            subHead="Cortex Copywriter"
                            style={{
                              background:
                                "url(../../assets/blog_stock-1.jpg) no-repeat",
                              minHeight: "350px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <CaseStudyCardComponent
                            head="Vertical video to virtual vistas. How will the screenwriting craft evolve?"
                            subHead="Cortex Copywriter"
                            style={{
                              background:
                                "url(../../assets/blog_stock-0.jpg) no-repeat",
                              minHeight: "350px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <CaseStudyCardComponent
                            head="Top 3 ways psychology-based copywriting satisfies user needs"
                            subHead="Cortex Copywriter"
                            style={{
                              background:
                                "url(../../assets/blog_stock-4.jpg) no-repeat",
                              minHeight: "350px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                          <CaseStudyCardComponent
                            head="Enhance your UX writing with FBI negotiation tactics"
                            subHead="Cortex Copywriter"
                            style={{
                              background:
                                "url(../../assets/blog_stock-7.jpg) no-repeat",
                              minHeight: "350px",
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
    </div>
  );
}
