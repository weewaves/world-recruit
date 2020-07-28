import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
  },
}));

export default function Image(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={getImgPath(props.data.src)}
        alt={props.data.alt}
      />
    </div>
  );
}
