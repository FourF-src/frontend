import React from 'react';
import styles from './index.css';
import { Grid, Container, Chip, Avatar, Box } from '@material-ui/core';
import RecipeReviewCard from '@/components/card';
import TopBar from '@/components/topbar';

export default function() {
  const items = []
  for(let i =0 ; i < 10; i++){
    items.push(<RecipeReviewCard key={i}/>)
  }

  return (
    <div>
      <TopBar />
      <Container maxWidth="sm">
        <Grid container style={{paddingTop: 80}}>
          <Grid item xs={12} >
            {items}
          </Grid>
        </Grid>
      </ Container>
    </div>
  );
}
