import React from 'react';
import { Box,  } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
        borderRadius: 4,
        border: '3px solid #1f364d',
        boxShadow:' 0 0 28px rgba(0,0,0,.07)',
        padding: 20
    }
  }),
);



export default function(p){
    const style = useStyles();
    return  <Box className={style.box}>
            slide
        </Box>
}