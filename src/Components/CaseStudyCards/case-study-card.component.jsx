import { Typography } from "@material-ui/core";
import React from "react";
import "./case-study-card.style.css";

export default function CaseStudyCardComponent({
  head,
  subHead,
  style,
  bigHead,
  smallHead,
}) {
  return (
    <div>
      <div className="case-study-card" style={style}>
        <div className="case-study-card-overlay">
          <div className="case-study-card-inner">
            <Typography className="case-study-card-head">{head}</Typography>
            <Typography className="case-study-card-sub-head">
              {subHead}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
