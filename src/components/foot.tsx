import React from 'react';
import {Container, Grid, Typography } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        foot: {
            marginTop: 40,
            borderTop: '1px solid #1f364d',
            paddingTop: 40,
            paddingBottom: 40
        },
    }),
);


export default function(){
    const style = useStyles()
    return <Container className={style.foot}>
        <Grid container>
            <Grid item sm={4} xs={12}>
                LOGO
            </Grid>
            <Grid item sm={4} xs={6}>
                <Typography variant="h2">
                    h2
                </Typography>
            </Grid>
            <Grid item sm={4} xs={6}>
                <Typography variant="h2">
                    h2
                </Typography>
            </Grid>
        </Grid>
    </Container>
}