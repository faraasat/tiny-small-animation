import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ReactComponent as HeaderBaseImg } from "../../assets/header-below.svg";
import { ReactComponent as HeaderLightImg } from "../../assets/header-middle.svg";
import { ReactComponent as HeaderBrainImg } from "../../assets/header-top.svg";
import { CustomButton } from "../../listing";
import { DataContext } from "../../data/data.context";
import useWebAnimations, { flash } from "@wellyshen/use-web-animations";

export default function Header() {
  const { data } = useContext(DataContext);
  const colors = { color1: null, color2: null };
  if (data?.id === "luxu" || data?.id === "comm") {
    colors.color1 = data?.color1;
    colors.color2 = data?.color2;
  } else {
    colors.color1 = data?.color2;
    colors.color2 = data?.color1;
  }

  const light = useWebAnimations({
    keyframes: flash.keyframes,
    timing: {
      ...flash.timing,
      duration: 700,
      delay: 500,
      iterations: 1000000,
      timingFunction: "ease-in-out",
    },
  });

  const brain = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-35px)" },
      { transform: "translateY(0)" },
    ],
    timing: {
      duration: 5000,
      direction: "alternate",
      iterations: 10000000,
    },
  });

  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          width: "100%",
          position: "absolute",
          backgroundImage: `radial-gradient(closest-side at 70% 55%, ${colors.color1} 0%, ${colors.color2} 210%)`,
        }}
      >
        <Container>
          <Grid
            container
            style={{
              minHeight: "50vw",
              alignContent: "center",
            }}
            spacing={4}
          >
            <Grid
              item
              md={5}
              lg={5}
              xl={5}
              style={{
                width: "38%",
                position: "absolute",
                top: "13%",
                left: "10.7vw",
              }}
            >
              <Container>
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "6.5vw",
                    padding: 0,
                    margin: 0,
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    lineHeight: 0.9,
                    color: "white",
                    letterSpacing: 0,
                  }}
                >
                  CORTEX
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "400",
                    fontSize: "3.9vw",
                    padding: 0,
                    margin: 0,
                    marginBlockStart: 0.7,
                    marginBlockEnd: 0,
                    lineHeight: 0.9,
                    color: "white",
                    letterSpacing: 0,
                  }}
                >
                  COPYWRITER
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "400",
                    fontSize: "1.4vw",
                    display: "block",
                    marginBlockStart: "2.5em",
                    marginBlockEnd: "3.2em",
                    width: "30vw",
                    color: "white",
                    lineHeight: 1.25,
                    transform: "ScaleY(1.05)",
                  }}
                >
                  {data?.mainLine}
                </Typography>
                <CustomButton
                  btnColor1={data?.btnColor2}
                  btnColor2={data?.btnColor1}
                >
                  Send a Message
                </CustomButton>
              </Container>
            </Grid>
            <Grid item>
              <HeaderBaseImg
                style={{
                  width: "46%",
                  position: "absolute",
                  top: "10.5%",
                  left: "46%",
                }}
              />
              <HeaderLightImg
                ref={light.ref}
                style={{
                  width: "46%",
                  position: "absolute",
                  top: "10.5%",
                  left: "46%",
                }}
              />
              <HeaderBrainImg
                ref={brain.ref}
                style={{
                  width: "46%",
                  position: "absolute",
                  top: "10.5%",
                  left: "46%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}