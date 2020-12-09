import { Grid, Link, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../data/data.context";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import "./contact.style.css";

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
                fontSize: "29px",
                marginBlockStart: "3em",
                marginBlockEnd: "1.5em",
                lineHeight: 1,
                color: "white",
                textAlign: "center",
              }}
            >
              Pick my <span style={{ fontStyle: "italic" }}>brain/cortex </span>
              and let's get
              <br />
              <div
                style={{
                  marginTop: "0.15em",
                }}
              >
                <span style={{ fontWeight: "500" }}>started </span>
                on your project
              </div>
            </Typography>
          </Grid>
          <Grid
            container
            style={{
              alignText: "center",
              justifyContent: "center",
              marginBlockEnd: "3em",
            }}
          >
            <div
              className="contact-msg-class"
              style={{
                cursor: "pointer",
              }}
            >
              <Grid
                container
                style={{
                  alignText: "center",
                  justifyContent: "center",
                }}
              >
                <MailRoundedIcon
                  className="contact-mail-icon"
                  style={{ fontSize: "100px", color: "white" }}
                />
              </Grid>
              <Grid
                container
                style={{
                  alignText: "center",
                  justifyContent: "center",
                  marginBlockStart: "2em",
                  marginBlockEnd: "2em",
                }}
              >
                <Link
                className='contact-mail-link'
                  style={{
                    color: "white",
                    fontSize: " 15px",
                    fontWeight: "500",
                  }}
                >
                  nathan@cortexcopywriter.com
                </Link>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
