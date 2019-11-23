import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
  }
}));

const questions = [
    {
        str: "lalal",
        answer: true,
        rule: '1some rule',
    },
    {
      str: "lalal3",
      answer: false,
      rule: '2some rule',
    }
]


export default function SimpleList(props) {
  const classes = useStyles();
  const [question, setQuestions] = React.useState(0);
  const [solved, setSolved] = React.useState(false);
  const [score, setScore] = React.useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.root} {...props}>
      <Container>
       
       {question > 0 ? 
            question > questions.length ? (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
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
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>

                        <Paper className={classes.mistakeExample}>
                            <Typography component="p">
                                {questions[question-1].str}
                            </Typography>
                            <Button onClick={()=>{setSolved(true); setScore(score + (true === questions[question-1].answer)) }}>
                                True
                            </Button>
                            <Button onClick={()=>{setSolved(true); setScore(score + (false === questions[question-1].answer)) }}>
                                False
                            </Button>
                        </Paper>

                        {solved? (
                            <>
                                <Paper className={classes.mistakeExample}>
                                    <Typography component="p">
                                        {questions[question-1].rule}
                                    </Typography>
                                </Paper>
                                <Button onClick={()=>{setSolved(false);setQuestions(question+1)}}>
                                    Next question ->
                                </Button>
                            </>
                        ) : (
                            ""
                        )}
                    </Grid>
                </Grid>
            )
        : (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
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
    </div>
  );
}