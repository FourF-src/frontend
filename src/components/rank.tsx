import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      borderRadius: 4,
      border: '3px solid #1f364d',
      boxShadow: ' 0 0 28px rgba(0,0,0,.07)',
      padding: 20
    }
  }),
);



export default function (p) {
  const style = useStyles();
  return <Box className={style.box}>
    <List dense >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${value + 1}`} secondary="jdlfaodif  joii jadio adsijo j" />
          </ListItem>
        );
      })}
    </List>
  </Box>
}