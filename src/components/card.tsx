import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import router from 'umi/router';
import {Card, CardContent, CardHeader, Avatar, Typography, IconButton, Button, CardActions, CardActionArea, Box} from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';
import { MoreVert, ExpandMore, Favorite } from '@material-ui/icons';
import {LoremIpsum} from 'lorem-ipsum';
const genText = new LoremIpsum({
  sentencesPerParagraph: {
      max: 2, min: 1
  },
  wordsPerSentence: {
      max: 8, min: 4
  }
})

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title:{
    fontSize: theme.typography.fontSize*1.2
  },
  content:{
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
  },
  contentHover: {
    "& a": {
      color: red[800]
    },
    "&:hover": {
      "& a":{
        textDecoration: 'underline',
        color: red[200]
      },
      color: grey[500],
      cursor: 'pointer'
    }
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const content = expanded? 
  <Typography variant="body2">
  <Box>
    {genText.generateParagraphs(20)}
  </Box>
  </Typography>:
  <Typography onClick={handleExpandClick}  className={classes.contentHover} variant="body2">
    {genText.generateParagraphs(4)} <a>more</a>
  </Typography>;


  const title = <Typography component="div" variant="h3" className={classes.title}>{genText.generateSentences(1)}</Typography>
  const author = <Box>
    <Typography variant="caption">{genText.generateWords(2)}</Typography>
    <Typography variant="body2">{genText.generateSentences(1)}</Typography>
  </Box>
  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={author}
      />
      <CardContent className={classes.content}>
        {content}

      </CardContent>

      <CardActions disableSpacing>
        <Button>like</Button>
        {expanded&&    <Button>learn more</Button>}
        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded})} onClick={handleExpandClick}><ExpandMore /></IconButton>
      </CardActions>

    </Card>
  );
}
