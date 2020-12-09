import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import { ReviewSectionCardComponent } from "../../listing";
import { ReactComponent as Person2 } from "../../assets/persona-2.svg";
import { ReactComponent as Person7 } from "../../assets/persona-7.svg";
import { ReactComponent as Person6 } from "../../assets/persona-6.svg";
import { ReactComponent as Person4 } from "../../assets/persona-4.svg";
import { ReactComponent as Person5 } from "../../assets/persona-5.svg";
import { ReactComponent as Person3 } from "../../assets/persona-3.svg";

export default function ReviewSectionComponent() {
  const { data } = useContext(DataContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "auto !important",
      }}
    >
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
              marginBlockStart: "4.9em",
              marginBlockEnd: "1.8em",
              lineHeight: 1,
              color: "white",
              backgroundColor: data?.avatarData?.color1,
              filter: "brightness(70%)",
              display: "inline-block",
              boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
              padding: "10px 40px",
            }}
          >
            Reviews
          </Typography>
        </Grid>
        <Grid container>
          <Container maxWidth="lg">
            <Container maxWidth="lg">
              <Container maxWidth="lg" spacing={1} style={{ marginTop: "3vw" }}>
                <Grid
                  container
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginBlockEnd: '5.9em'
                  }}
                  spacing={3}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person2}
                      name="Karl Van Lieshout"
                      title="Owner & Operator - Ausbeds"
                      revs="..innovative|..seamless UX|..more online sales"
                      detail1="I contacted Nathan because the innovative conversational interface and seamless user experience of his website inspired me. His perspective on my website rewrite was a huge help – Nathan gave me some great ideas that got me out of a creative slump."
                      detail2="He nailed all my briefs and produced excellent content – web copy, USP, SEO, UX, CX writing, scripted chatbot, and email marketing. Thanks to Nathan, customers compliment my new website and we’re getting more online sales."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person7}
                      name="Rosawin Siri"
                      title="Digital Marketing Manager - 4mation Technologies"
                      revs="..flexible|..nailed voice & tone|..keep on retainer"
                      detail1="Nathan is very easy going and flexible – we meet virtually or on-site at my office. He worked hard to understand our brand voice and write content with the correct tone, personality, and word choices."
                      detail2="Nathan nailed brand voice & tone after a couple of attempts and now I keep him on retainer to write a wide range of content from web copy, blogs, and social media. His writing is so effective, it evokes almost instant action from our target audience and consistently achieves business goals."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person6}
                      name="Craig Erskine-Smith"
                      title="CEO – Erskine Oral Care"
                      revs="..wonderful ideas|..perfect tagline|..excellent wireframes"
                      detail1="Nathan was very helpful, he produced wonderful ideas and wrote great web copy for me. He was friendly, flexible, and participated in a design sprint with my product team."
                      detail2="Nathan came up with the perfect tagline and unique value proposition for my product and we sketched out excellent wireframes that clarified my website content and functionality."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person5}
                      name="Liam Key"
                      title="Creative Director – Imagination Pioneers Studios"
                      revs="..innovative|..seamless UX|..more online sales"
                      detail1="I always enjoy working with Nathan, I love his passion to think and dream of big things. His writing craft is brilliant and has heaps of depth behind it. Nathan works closely with my design studio to deliver copy across a range of mediums – web development, motion graphics, 3D animation, and more."
                      detail2="The voice and tone Nathan writes with really speaks to my brand and reinforces the value of what I do. I look forward to seeing all of the interesting ideas we have discussed come to life."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person4}
                      name="Eoin Mullins"
                      title="Director – Corbel Technologies"
                      revs="..beautiful copy|..psychology edge|..emotional currents"
                      detail1="I received consistently beautiful web copy from Nathan. His background in psychology and neuroscience gives his writing an edge."
                      detail2="Nathan can tune into the emotional currents of desire, need, and pleasure that pull customers to our products and services."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ReviewSectionCardComponent
                      svgImage={Person3}
                      name="Adrian Rodriguez Soto"
                      title="eCommerce Manager – EUX Agency"
                      revs="..superior intellect|..deep psychology|..doubled conversions"
                      detail1="Within 2 minutes of talking with Nathan, I realized I was dealing with a superior intellect. He doesn’t miss much! I was shocked by the speed, power, and precision of Nathan’s copywriting and UX writing. Nathan instinctively knows what works and what doesn’t because he has deep knowledge of consumer and behavioral psychology."
                      detail2="Nathan’s fine-tuned copy nearly doubled our website’s overall conversion rate. I can’t wait to see what he does next for our business!"
                    />
                  </Grid>
                </Grid>
              </Container>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
