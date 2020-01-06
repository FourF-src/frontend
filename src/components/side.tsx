import React from 'react';
import Banner from '@/components/banner';
import Rank from '@/components/rank';
import { Box } from '@material-ui/core';


export default function (p) {
  return <Box >
    <Banner />
    <Rank />
  </Box>
}