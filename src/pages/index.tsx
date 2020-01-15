import React from 'react';
import Main from '@/components/main';
import Side from '@/components/side';
import {Grid} from '@material-ui/core';

export default function() {

  return <Grid container spacing={4}>
    <Grid item md={8} xs={12}>
      <Main />
    </Grid>
    <Grid item md={4} xs={12}>
      <Side />
    </Grid>
  </Grid>
}
