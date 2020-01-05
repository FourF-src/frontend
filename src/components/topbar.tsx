import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu, MenuItem, Grid, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<EventTarget|null>(null);

  const handleClick = (event:MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logo = <Box color="inherit" display="flex" height="100%" alignItems="center" justifyContent="center">LOGO</Box>;
  
  const bar = <Box display="flex" alignItems="center" justifyContent="flex-end" flexGrow="1">
    <MenuItem color="inherit">II</MenuItem>
    <MenuItem color="inherit">EE</MenuItem>
    <MenuItem color="inherit">PP</MenuItem>
    <MenuItem aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      more
      </MenuItem>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  </Box>;

  return (
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{padding: 0}}>
            {logo}
            {bar}
          </Toolbar>
        </Container>
      </AppBar>
  );
}