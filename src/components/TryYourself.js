import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
  },
  centerContainer: {
    height: 'calc(100vh - 120px)',
  },
  buttonAnswer: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    fontSize: '22px',
    margin: '1rem',
    backgroundColor: "#fbfbfb",
    border:'10px solid #fbfbfb',
  },
  questionContainer: {
    backgroundColor: "#fbfbfb",
    padding: theme.spacing(2, 3),
  },
  mistakeExample: {
    padding: theme.spacing(2, 3),
    backgroundColor: "#fbfbfb",
  }
}));

const questions = [
    {
        str: "Coffee",
        answer: true,
        rule: '1some rule',
        choice: ['some', 'a']
    },
    {
      str: "Bottle",
      answer: false,
      rule: '2some rule',
      choice: ['some', 'a']
    },
    {
        str: "Student",
        answer: false,
        rule: '2some rule',
        choice: ['some', 'a']
    },
    {
        str: "Water",
        answer: true,
        rule: '2some rule',
        choice: ['some', 'a']
    },
    {
        str: "Shoes",
        answer: false,
        rule: '2some rule',
        choice: ['some', 'a']
    },
    {
        str: "Sadness",
        answer: true,
        rule: '2some rule',
        choice: ['some', 'a']
    },
    {
        str: "Cat",
        answer: false,
        rule: '2some rule',
        choice: ['some', 'a']
    },
]


export default function SimpleList(props) {
  const classes = useStyles();
  const [question, setQuestions] = React.useState(0);
  const [solved, setSolved] = React.useState(false);
  const [score, setScore] = React.useState(0);

  return (
      <div className={classes.root} {...props}>
      <Container>
       
       {question > 0 ? 
            question > questions.length ? (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.centerContainer}
                >
                    <Grid item>
                        <Typography>
                            Your score is - {score}/{questions.length} ! Nice job!
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className={classes.centerContainer}
                >
                    <Grid item>

                        <Paper className={classes.questionContainer}>
                            <Typography component="p">
                                {questions[question-1].str}
                            </Typography>
                        </Paper>

                        <div>
                            <Button 
                                className={classes.buttonAnswer}
                                onClick={()=>{
                                    setSolved(true);
                                    setScore(score + (true === questions[question-1].answer))
                                    }}
                                variant="outlined"
                                color="primary"
                                disabled={solved}
                                    >
                                {questions[question-1].choice[0]}
                            </Button>
                            <Button
                                className={classes.buttonAnswer}
                                onClick={()=>{
                                    setSolved(true);
                                    setScore(score + (false === questions[question-1].answer)) 
                                    }}
                                variant="outlined"
                                color="primary"    
                                disabled={solved}
                                    >
                                {questions[question-1].choice[1]}
                            </Button>
                        </div>
                    </Grid>
                    <Fade in={solved}>
                        <Grid item >
                            <Paper className={classes.mistakeExample}>
                                <Typography component="p">
                                    {questions[question-1].rule}
                                </Typography>
                            </Paper>
                            <Button onClick={()=>{setSolved(false);setQuestions(question+1)}}>
                                Next question ->
                            </Button>
                        </Grid>
                    </Fade>
                </Grid>
            )
        : (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.centerContainer}
        >
            <Grid item>
                <Button onClick={()=>setQuestions(1)}>
                    Start Quiz
                </Button>
            </Grid>
        </Grid>
       )}
      </Container>
    </div>
  );
}