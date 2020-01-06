import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      borderRadius: 4,
      border: '3px solid #1f364d',
      boxShadow: ' 0 0 28px rgba(0,0,0,.07)',
      marginBottom: 30,
      position: 'relative',
      paddingTop: 9/16*100+'%'
    },
    img: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }),
);



export default function (p) {
  const style = useStyles();
  return <Box className={style.box}>
      <Typography variant="body1" className={style.img} >
        banner
      </Typography>
  </Box>
}