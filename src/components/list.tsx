import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
import {LoremIpsum} from 'lorem-ipsum';
import {deepOrange, deepPurple, red, green} from '@material-ui/core/colors';
const useStyles = makeStyles((theme:Theme)=>createStyles({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },  
    red: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
    green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
    }
}));

const genText = new LoremIpsum({
    sentencesPerParagraph: {
        max: 2, min: 1
    },
    wordsPerSentence: {
        max: 8, min: 4
    }
})
export default function(){
    const item = []
    let i = 10;
    while (i>0){
        item.push(i)
        i -= 1
    }
    const style = useStyles();
    const genColor = React.useCallback(()=>{
        const len = Object.keys(style).length;
        const k = Object.keys(style)[Math.floor(Math.random()*len)]
        return (style as any)[k] as string;
    }, [style])
    return <List >
        {
            item.map(value=>(<ListItem key={value}>
                <ListItemAvatar >
                    <Avatar className={genColor()}>{genText.generateWords(1).slice(0,2)}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={genText.generateSentences(1)} secondary={genText.generateParagraphs(1)}/>
            </ListItem>))
        }
    </List>
}