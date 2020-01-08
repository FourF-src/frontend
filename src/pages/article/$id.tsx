import React from 'react';
import { Grid } from '@material-ui/core';
import Content from './content';

export default function () {
  return <Grid container spacing={4}>
    <Grid item sm={10}>
      <Content />
    </Grid>
    <Grid item sm={2}>
      side
    </Grid>
  </ Grid>
}