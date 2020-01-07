import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
import {LoremIpsum} from 'lorem-ipsum';
import colorByText from '@/util/colorbytext';
const useStyles = makeStyles((theme:Theme)=>createStyles({
}));

const genText = new LoremIpsum({
    sentencesPerParagraph: {
        max: 2, min: 1
    },
    wordsPerSentence: {
        max: 8, min: 4
    }
})

const MyAvatar = colorByText(Avatar);

export default function(){
    const item = []
    let i = 10;
    while (i>0){
        item.push(i)
        i -= 1
    }
    const style = useStyles();
    return <List >
        {
            item.map(value=>(<ListItem key={value}>
                <ListItemAvatar >
                    <MyAvatar>{genText.generateWords(1).slice(0,2)}</MyAvatar>
                </ListItemAvatar>
                <ListItemText primary={genText.generateSentences(1)} secondary={genText.generateParagraphs(1)}/>
            </ListItem>))
        }
    </List>
}