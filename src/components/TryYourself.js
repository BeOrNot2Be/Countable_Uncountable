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

const uncountable_plural_form = "Uncountable or ‘mass’ nouns do not go with numbers, and rarely with plural forms or articles. Uncountable, or ‘mass’ nouns, define abstract qualities, materials, liquids, collections and things we conceptualise as being without separate identities or boundaries." 

const determiners = "Some determiners only go with countable nouns (many, few, several, every etc). Others only go with uncountable nouns (much, little, less etc). Use the correct type."

const  uncountable_plural_only = "Some uncountable nouns are only plural, with no singular equivalent. Common examples include arms (weapons), trousers, glasses (spectacles), goods, groceries, clothes, thanks, police, customs (at national boundaries), remains. They can be used with the definite article ‘the’, but not with the indefinite article ‘a/an’ or numbers." 



const full_questions = [
    {
        str: "Coffee",
        answer: true,
        rule: 'Coffee is uncountable',
        choice: ['some', 'a']
    },
    {
      str: "Bottle",
      answer: false,
      rule: 'Bottle is countable',
      choice: ['some', 'a']
    },
    {
        str: "Student",
        answer: false,
        rule: 'Student is countable',
        choice: ['some', 'a']
    },
    {
        str: "Water",
        answer: true,
        rule: 'Water is uncountable',
        choice: ['some', 'a']
    },
    {
        str: "Shoes",
        answer: false,
        rule: 'Shoes is countable',
        choice: ['some', 'a']
    },
    {
        str: "Sadness",
        answer: true,
        rule: 'Sadness is uncountable',
        choice: ['some', 'a']
    },
    {
        str: "Cat",
        answer: false,
        rule: 'Cat is countable',
        choice: ['some', 'a']
    },
    


    {
        str: "The program aimed at improving the safety of aircraft operations during ___ severe winter weather.",
        answer: false,
        rule: uncountable_plural_form,
        choice: ['  ', 'a']
    },
    {
        str: "Arbitration allows resolution of disputes in cases involving the movement by ___ of goods required for resupply services.",
        answer: true,
        rule: uncountable_plural_form,
        choice: ['water', 'waters']
    },
    {
        str: "Estimated useful lives currently range between three to five years for electronic ___",
        answer: false,
        rule: uncountable_plural_form,
        choice: ['equipments and furnitures', 'equipment and furniture']
    },
    {
        str: "The Company may generate ___ revenue from the sale of these devices than from the sale of PCs.",
        answer: true,
        rule: determiners,
        choice: ['less', 'fewer']
    },
    {
        str: "Throughout ___ of Canada’s history, a large share of federal spending on transport has been in the form of direct subsidies and grants.",
        answer: false,
        rule: determiners,
        choice: ['many', 'much']
    },
    {
        str: "The federal government, airport operators and ___ local police are working closely together.",
        answer: true,
        rule: uncountable_plural_only,
        choice: ['a', '   ']
    },
    {
        str: "It is well known that some Western countries are engaged in the sale of ___ to Iraq, despite also imposing sanctions.",
        answer: false,
        rule: uncountable_plural_only,
        choice: ['arm', 'arms']
    },
]
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const questions = shuffle(full_questions).slice(0, 10)

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