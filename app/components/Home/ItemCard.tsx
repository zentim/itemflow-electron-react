/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    width: 200,
  },
  cardDetailsContent: {
    '&:last-child': {
      paddingBottom: 8,
    },
  },
  cardMedia: {
    width: 84,
  },
  cardTitle: {
    fontSize: 12,
  },
  cardDescription: {
    fontSize: 16,
    color: '#FF5454',
    marginTop: 20,
  },
});

export default function ItemCard(props: { item: any }) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <CardActionArea>
        <Card className={classes.card}>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={item.image}
              title={item.imageTitle}
            />
          </Hidden>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardDetailsContent}>
              <Typography
                variant="h6"
                color="textSecondary"
                className={classes.cardTitle}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                className={classes.cardDescription}
              >
                {item.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object,
};
