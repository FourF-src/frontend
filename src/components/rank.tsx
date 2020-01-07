import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {LoremIpsum} from 'lorem-ipsum';
import colorByText from '@/util/colorbytext';

const genText = new LoremIpsum({
  sentencesPerParagraph: {
      max: 2, min: 1
  },
  wordsPerSentence: {
      max: 8, min: 4
  }
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      borderRadius: 4,
      border: '3px solid #1f364d',
      boxShadow: ' 0 0 28px rgba(0,0,0,.07)',
      padding: 20
    },
    title:{
      fontSize: theme.typography.fontSize*1.2,
      paddingBottom: theme.spacing(2)
    }
  }),
);

const MyAvatar = colorByText(Avatar)

export default function (p) {
  const style = useStyles();
  return <Box className={style.box}>
    <Typography className={style.title} variant="h2" component="div">Newest Comments</Typography>
    <Divider />
    <List dense>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <MyAvatar
                alt={genText.generateWords(1).slice(0,2)}
              >
                {genText.generateWords(1).slice(0,2)}
              </MyAvatar>
            </ListItemAvatar>
            <ListItemText primary={genText.generateWords(2)} secondary={genText.generateParagraphs(1).slice(0,50)} />
          </ListItem>
        );
      })}
    </List>
  </Box>
}