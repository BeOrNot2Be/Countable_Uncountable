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
      minHeight: 'calc(100vh - 120px)',
  },
  mistakeExample: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#fbfbfb",
  },
  mistakeRule: {
    backgroundColor: "#fbfbfb",
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
            spacing={2}
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
const mistake1 = "Uncountable amd plural forms or articles"
const uncountable_plural_form = "Uncountable or ‘mass’ nouns do not go with numbers, and rarely with plural forms or articles. Uncountable, or ‘mass’ nouns, define abstract qualities, materials, liquids, collections and things we conceptualise as being without separate identities or boundaries." 

const mistake2 = "Determiners with countable/uncountable"
const determiners = "Some determiners only go with countable nouns (many, few, several, every etc). Others only go with uncountable nouns (much, little, less etc). Use the correct type."

const mistake3 = "Only plural uncountable"
const  uncountable_plural_only = "Some uncountable nouns are only plural, with no singular equivalent. Common examples include arms (weapons), trousers, glasses (spectacles), goods, groceries, clothes, thanks, police, customs (at national boundaries), remains. They can be used with the definite article ‘the’, but not with the indefinite article ‘a/an’ or numbers." 



const mistakes = [
    {
        ID: 0,
        header: "Intro",
        wrong: "In English grammar, countable nouns are individual people, animals, places, things, or ideas which can be counted. Uncountable nouns are not individual objects, so they cannot be counted. Here, we’ll take a look at countable and uncountable nouns and provide both countable noun examples and uncountable noun examples. Although the concept may seem challenging, you’ll soon discover that these two different noun types are very easy to use.",
        right: (<span>
                <h4>Countable Noun</h4>
                Anything that can be counted, whether singular – a dog, a house, a friend, etc. or plural – a few books, lots of oranges, etc. is a countable noun. The following countable noun examples will help you to see the difference between countable and uncountable nouns. Notice that singular verbs are used with singular countable nouns, while plural verbs are used with plural countable nouns.
                </span>),
        rule: (<span>
            <h4>Uncountable Noun</h4>
            Anything that cannot be counted is an uncountable noun. Even though uncountable nouns are not individual objects, they are always singular and one must always use singular verbs in conjunction with uncountable nouns. The following uncountable noun examples will help you to gain even more understanding of how countable and uncountable nouns differ from one another. Notice that singular verbs are always used with uncountable nouns.
            </span>),
    },
    {
        ID: 1,
        header: "Article",
        wrong: (<span>The program aimed at improving the safety of aircraft operations during <span style={{color:'red'}}>a severe winter weather</span>.</span>),
        right: (<span>The program aimed at improving the safety of aircraft operations during <span style={{color:'green'}}> severe winter weather</span>.</span>),
        rule: uncountable_plural_form
    },
    {
        ID: 2,
        header: "Plural form #1",
        wrong: (<span>Arbitration allows resolution of disputes in cases involving the movement by <span style={{color:'red'}}>waters</span> of goods required for resupply services.</span>),
        right: (<span>Arbitration allows resolution of disputes in cases involving the movement by <span style={{color:'green'}}>water</span> of goods required for resupply services.</span>),
        rule: uncountable_plural_form
    },
    {
        ID: 3,
        header: "Plural form #2",
        wrong: (<span>Estimated useful lives currently range between three to five years for electronic <span style={{color:'red'}}>equipments and furnitures</span>.</span>),
        right: (<span>Estimated useful lives currently range between three to five years for electronic <span style={{color:'green'}}>equipment and furniture</span>.</span>),
        rule: uncountable_plural_form
    },
    {
        ID: 4,
        header: "Determiners #1",
        wrong: (<span>The Company may generate <span style={{color:'red'}}>fewer</span> revenue from the sale of these devices than from the sale of PCs.</span>),
        right: (<span>The Company may generate <span style={{color:'green'}}>less</span> revenue from the sale of these devices than from the sale of PCs.</span>),
        rule: determiners
    },
    {
        ID: 5,
        header: "Determiners #2",
        wrong: (<span>Throughout <span style={{color:'red'}}>many</span> of Canada’s history, a large share of federal spending on transport has been in the form of direct subsidies and grants.</span>),
        right: (<span>Throughout <span style={{color:'green'}}>much</span> of Canada’s history, a large share of federal spending on transport has been in the form of direct subsidies and grants.</span>),
        rule: determiners
    },
    {
        ID: 6,
        header: "Plural uncountable #1",
        wrong: (<span>The federal government, airport operators and <span style={{color:'red'}}>a local police</span> are working closely together.</span>),
        right: (<span>The federal government, airport operators and <span style={{color:'green'}}>local police</span> are working closely together.</span>),
        rule: uncountable_plural_only
    },
    {
        ID: 7,
        header: "Plural uncountable #1",
        wrong: (<span>It is well known that some Western countries are engaged in the sale of <span style={{color:'red'}}>arm</span> to Iraq, despite also imposing sanctions.</span>),
        right: (<span>It is well known that some Western countries are engaged in the sale of <span style={{color:'green'}}>arms</span> to Iraq, despite also imposing sanctions.</span>),
        rule: uncountable_plural_only
    },
];

const subListMistakes = [
    {
        name: 'Intro',
        mistakes: mistakes.slice(0,1)
    },
    {
        name: mistake1,
        mistakes: mistakes.slice(1,4)
    },
    {
        name: mistake2,
        mistakes: mistakes.slice(4,6)
    },
    {
        name: mistake3,
        mistakes: mistakes.slice(6)
    },
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