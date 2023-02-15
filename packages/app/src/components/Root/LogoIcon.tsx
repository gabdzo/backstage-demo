import React from 'react';
import { makeStyles } from '@material-ui/core';
import MerckIcon from '../../logo/site-icon.svg';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return <img src={MerckIcon} className={classes.svg} />
};

export default LogoIcon;
