 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    margin: '2rem',
  },
  centerContainer: {
    height: 'calc(100vh - 120px)',
  },
  textContainer: {
    width: '100%',
    maxWidth: '550px'
  }
}));


export default function SimpleList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.centerContainer}
          >
          <Grid item className={classes.textContainer}>
            <Typography  variant="h2" component="h2" className={classes.header}>
            Purpose
            </Typography>

            <Typography>
            This website is designed with the purpose to teaching you about the use of accounting and non-accounting nouns, during your visit to this website you will learn basic concepts and practice with activate that we have for you .
            We hope you enjoy your visit to this website
            Are you ready! let's learn
            </Typography> 
          </Grid>
      </Grid>
      </Container>
    </div>
  );
}