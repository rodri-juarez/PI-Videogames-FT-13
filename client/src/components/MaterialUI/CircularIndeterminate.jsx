import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(42, 42, 42);',
    height:'45vw',
    width: '100vw',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress disableShrink size={200} />
    </div>
  );
}