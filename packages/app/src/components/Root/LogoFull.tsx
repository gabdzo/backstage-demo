import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogoFull from '../../logo/site-logo.svg';


const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 80,
    display: 'flex',
    margin: 'auto'
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoFull = () => {
  const classes = useStyles();
  return <img src={MyCustomLogoFull} className={classes.svg} />;
};
export default LogoFull;
