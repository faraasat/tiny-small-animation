import { Grid, Link, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Footer() {
  const { data } = useContext(DataContext);

  return (
    <div
      style={{
        height: "auto !important",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          width: "100%",
          position: "relative",
          top: "28.3vw",
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
              fontSize: "20px",
              marginBlockStart: "4.9em",
              marginBlockEnd: "1.8em",
              lineHeight: 1,
              color: "white",
            }}
          >
            Based in Sydney, Australia. Available worldwide.
          </Typography>
        </Grid>
        <Grid
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href="https://www.instagram.com/farasat_ali_azeemi/"
            target="_blank"
          >
            <InstagramIcon
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "50px",
                margin: 15,
              }}
            />
          </Link>
          <Link
            href="https://www.facebook.com/FarasatAliAzeemi/"
            target="_blank"
          >
            <FacebookIcon
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "50px",
                margin: 15,
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/farasat-ali-015407193/"
            target="_blank"
          >
            <LinkedInIcon
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "50px",
                margin: 15,
              }}
            />
          </Link>
          <Link href="https://github.com/faraasat/" target="_blank">
            <GitHubIcon
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "50px",
                margin: 15,
              }}
            />
          </Link>
        </Grid>
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
              fontSize: "16px",
              marginBlockStart: "2.9em",
              marginBlockEnd: "4em",
              lineHeight: 1,
              color: "white",
            }}
          >
            © Cortex Copywriter 2020 | ABN 341 1599 0520
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
