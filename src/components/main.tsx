import React from 'react';
import { Tab, Tabs, Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            borderRadius: 4,
            border: '3px solid #1f364d',
            boxShadow: ' 0 0 28px rgba(0,0,0,.07)',
        },
        tab: {
            borderBottom: '1px solid #1f364d',
        }
    }),
);


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}





export default function (p) {
    const style = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return <Box className={style.box}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={style.tab}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
        </Tabs>
        <TabPanel index={0} value={value}>0</TabPanel>
        <TabPanel index={1} value={value}>1</TabPanel>
    </Box>
}