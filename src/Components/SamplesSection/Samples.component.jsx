import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { CardComponent } from "../../listing";

export default function SamplesComponent() {
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
          backgroundImage: `linear-gradient(to right, ${data?.avatarData?.color2}200%, ${data?.avatarData?.color1})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: "135vw",
          paddingBlockEnd: '5vw'
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Container
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "300",
                    fontSize: "1.8vw",
                    marginBlockStart: "0.8em",
                    marginBlockEnd: "0.2em",
                    lineHeight: 0.9,
                    color: "white",
                    backgroundColor: data?.avatarData?.color2,
                    filter: "brightness(75%)",
                    display: "inline-block",
                    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
                    padding: "10px 40px",
                  }}
                >
                  Samples
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Container
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.8vw",
                    marginTop: "1vw",
                    marginBottom: "6vw",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "400" }}>Useful UX</span>
                </Typography>
              </Container>
              <Container maxWidth="lg">
                <Container maxWidth="lg">
                  <Container maxWidth="lg">
                    <Container maxWidth="lg">
                      <Container maxWidth="lg">
                        <Container
                          maxWidth="lg"
                          spacing={0}
                          style={{ marginTop: "3vw" }}
                        >
                          <Grid
                            container
                            style={{
                              alignContent: "center",
                            }}
                            spacing={2}
                          >
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                mainLine="Scripted Chatbot"
                                detail="Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range."
                                link="Case study"
                                image="assets/chatbot.jpg"
                              />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                mainLine="User Onboarding"
                                detail="Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguity."
                                link="See More"
                                image="assets/speedpix.jpg"
                              />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                mainLine="Product Development"
                                detail="As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more."
                                link="Case study coming in 2020"
                                image="assets/startscale.jpg"
                              />
                            </Grid>
                          </Grid>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Container
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.8vw",
                    marginTop: "3.9vw",
                    marginBottom: "5vw",
                    color: "white",
                  }}
                >
                  <span style={{ fontWeight: "400" }}>Digital Copy</span>
                </Typography>
              </Container>
              <Container maxWidth="lg">
                <Container maxWidth="lg">
                  <Container maxWidth="lg">
                    <Container maxWidth="lg">
                      <Container maxWidth="lg">
                        <Container
                          maxWidth="lg"
                          spacing={0}
                          style={{ marginTop: "3vw" }}
                        >
                          <Grid
                            container
                            style={{
                              alignContent: "center",
                            }}
                            spacing={2}
                          >
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                style={{ minHeight: 460 }}
                                mainLine="Rebranding Campaign"
                                detail="I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence."
                                link="Case study"
                                image="assets/blaze_sample.jpg"
                              />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                style={{ minHeight: 460 }}
                                mainLine="Facebook Ads"
                                detail="I’ve lost count of how many Facebook ads I’ve written. My general strategy for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and shows empathy. Check out some of my recent ads."
                                link="see more"
                                image="assets/tara.jpg"
                              />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                style={{ minHeight: 460 }}
                                mainLine="Explainer Video"
                                detail="Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%."
                                link="see more"
                                image="assets/purelearning_sample.jpg"
                              />
                            </Grid>
                          </Grid>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
              <Container maxWidth="lg">
                <Container maxWidth="lg">
                  <Container maxWidth="lg">
                    <Container maxWidth="lg">
                      <Container maxWidth="lg">
                        <Container
                          maxWidth="lg"
                          spacing={0}
                          style={{ marginTop: "1.2vw" }}
                        >
                          <Grid
                            container
                            style={{
                              justifyContent: "center",
                            }}
                            spacing={2}
                          >
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                style={{ minHeight: 430 }}
                                mainLine="YouTube Ad"
                                detail="Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I wrote, storyboarded, and directed. The ad ran for 30 days and yielded 19 conversions, with a 67% view rate."
                                link="Case study"
                                image="assets/adgroove_sample.jpg"
                              />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                              <CardComponent
                                style={{ minHeight: 430 }}
                                mainLine="Pilot Screenplay"
                                detail="Screenwriting is one of my specialties. My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia."
                                link="Award Here"
                                image="assets/rayvonsnest_sample.jpg"
                              />
                            </Grid>
                          </Grid>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
