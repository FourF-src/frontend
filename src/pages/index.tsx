import React from 'react';
import styles from './index.css';
import Main from '@/components/main';
import Side from '@/components/side';
import {Grid} from '@material-ui/core';

export default function() {

  return <Grid container spacing={4}>
    <Grid item md={8} >
      <Main />
    </Grid>
    <Grid item md={4} >
      <Side />
    </Grid>
  </Grid>
}
