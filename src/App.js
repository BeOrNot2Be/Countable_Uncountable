import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/Header"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
