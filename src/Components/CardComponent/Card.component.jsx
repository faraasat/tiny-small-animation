import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.style.css";

export default function CardComponent({
  mainLine,
  detail,
  link,
  image,
  style,
}) {
  return (
    <Card className="card-component-card" style={style}>
      <CardMedia
        component="img"
        alt={mainLine}
        height="170"
        image={image}
        title={mainLine}
      />
      <CardContent>
        <Typography
          gutterBottom
          style={{
            fontWeight: 700,
            fontSize: 14,
            padding: "15px 0 15px 10px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {mainLine}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            padding: 6,
            fontFamily: "Montserrat, sans-serif",
            color: "#000",
          }}
        >
          {detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          style={{ paddingLeft: 15, textTransform: "capitalize" }}
        >
          {link}
        </Button>
      </CardActions>
    </Card>
  );
}
