import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './OfferGrid.css';

const useStyles = makeStyles({
  card: {
        width: 300,
        height: 300,
        margin: 5
  },
  media: {
      width: 300,
      height: 170
  },
});

export default function OfferCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image={props.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.price.value} {props.price.currency}
            </Typography>
        </CardContent>
    </Card>
  );
}
