import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
      width: 250,
      height: 250,
      backgroundColor: "rgba(0, 0, 0, .6)"
  },
  media: {
      width: "auto",
      height: 100,
      margin: "auto"
  },
  content: {
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, .5)",
      color: "rgba(255, 255, 255, .8)"
  },
  pos: {
      height: "40%",
      verticalAlign: "bottom"
  }
});

export default function OfferCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            component="img"
            className={classes.media}
            image={props.image}
        />
        <CardContent className={classes.content}>
        <Typography className={classes.pos} variant="overline" component="h2">
                {props.name}
            </Typography>
            <Typography align="right" variant="body2" component="p">
                {props.price.value} {props.price.currency}
            </Typography>
        </CardContent>
    </Card>
  );
}
