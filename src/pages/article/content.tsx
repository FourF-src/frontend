import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Typography, Box, Paper, Divider, Avatar, Button, Grid} from '@material-ui/core';
import {LoremIpsum} from 'lorem-ipsum';
import colorbytext from '@/util/colorbytext';
import moment from 'moment';

const genText = new LoremIpsum({
  sentencesPerParagraph: {
      max: 2, min: 1
  },
  wordsPerSentence: {
      max: 16, min: 8
  }
})
const MyAvatar = colorbytext(Avatar);
const useStyles = makeStyles((theme:Theme)=>createStyles({
  time:{
    fontSize: theme.typography.fontSize * 0.8,
    color: theme.palette.info.light
  },
  title:{
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontSize: theme.typography.fontSize * 1.5
  },
  content:{
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  info:{
    fontSize: theme.typography.fontSize,
    color: theme.palette.info.main,
  },
  paper:{
    padding: theme.spacing(5)
  }
}));

export default function(p){
    const style = useStyles(p)
    const t = moment(Math.ceil(Math.random()*100000)).format();
    return (
      <Paper elevation={3} className={style.paper}>
        <Box component="time" className={style.time}>{t}</Box>
        <Typography variant="h3" className={style.title}>{genText.generateSentences(1)}</Typography>
        <Divider />

        <Typography variant="body1" className={style.content}>{genText.generateParagraphs(10)}</Typography>
        <Grid container>
          <Grid item xs={4}>
          --by <span style={{display:'inline-block', width: 100}}><MyAvatar>{genText.generateWords(1).slice(0,2)}</MyAvatar></span>
          </Grid>
          <Grid item xs={4} className={style.info}>
            <Button>comment</Button>
          </Grid>
          <Grid item xs={4} className={style.info}>
            <Button>15 Like</Button>
          </Grid>
        </Grid>
      </Paper>
      );
}