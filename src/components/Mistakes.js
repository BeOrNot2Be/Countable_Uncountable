import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  Mistake: {
      height: 'calc(100vh - 120px)',
  },
  mistakeExample: {
    padding: theme.spacing(3, 2),
 
  },
  mistakeRule: {
    padding: theme.spacing(3, 2),
  },
}));


const MistakeComponent = (props) => {
    const { mistake, classes } = {...props};

    return (
        <div>
            <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.Mistake}
            >
                <Grid item>
                    <Typography variant="h2" component="h2" className={classes.mistakeHeader}>
                        {mistake.header}
                    </Typography>
                </Grid>
                <Grid item>
                    <Paper className={classes.mistakeExample}>
                        <Typography component="p">
                            {mistake.wrong}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.mistakeExample}>
                        <Typography component="p">
                            {mistake.right}
                        </Typography>
                    </Paper>    
                </Grid>
                <Grid item>
                    <Paper className={classes.mistakeRule}>
                        <Typography component="p">
                            {mistake.rule}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )

}


const mistakes = [
    {
        ID: 0,
        header: "Mistake 1",
        wrong: 'wrong example n1 wrong example n1 wrong example n1 wrong example n1',
        right: 'right example n1 right example n1 right example n1 right example n1',
        rule: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        ID: 1,
        header: "Mistake 2",
        wrong: 'wrong example n2 wrong example n1 wrong example n1 wrong example n1',
        right: 'right example n2 right example n1 right example n1 right example n1',
        rule: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

const subListMistakes = [
    {
        name: "Intro",
        mistakes: mistakes.slice(0, 2)
    }
];


export default function SimpleList(props) {
  const classes = useStyles();
  const [mistake, setMistake] = React.useState(0);

  return (
    <div className={classes.root} {...props}>
        <Container>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={3}>
                    <List className={classes.rootList} subheader={<li />}>
                    {subListMistakes.map((section, index) => (
                        <li key={`section-${index}`} className={classes.listSection}>
                        <ul className={classes.ul}>
                            <ListSubheader>{section.name}</ListSubheader>
                            {section.mistakes.map((item, itemIndex) => (
                            <ListItem button onClick={() => setMistake(item.ID)} key={`item-${index}-${itemIndex}`}>
                                <ListItemText primary={item.header} />
                            </ListItem>
                            ))}
                        </ul>
                        </li>
                    ))}
                </List>
                </Grid>
                <Grid item xs={12} md={9}>
                    <MistakeComponent mistake = {mistakes[mistake]} classes = {classes} />
                </Grid>
            </Grid> 
      </Container>
    </div>
  );
}