import React from 'react';
import {connect} from 'react-redux';
import { Tab, Tabs, Box, Typography, Button } from '@material-ui/core';
import { AppState } from '@/models/type';
import { actions } from '@/models/global';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@/components/card';
import List from '@/components/list';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            borderRadius: 4,
            border: '3px solid #1f364d',
            boxShadow: ' 0 0 28px rgba(0,0,0,.07)',
        },
        tab: {
            borderBottom: '1px solid #1f364d',
        },
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

function mapStore2Props(appState:AppState){
    return {
        digests: appState.global.digestList,
        digestPath: appState.global.digestPath,
        currentIndex: appState.global.currentIndex
    }
}
type Props = ReturnType<typeof mapStore2Props> & typeof actions;

const TimeLineList = connect (mapStore2Props, actions)(
    (p: Props)=>{
        const item = []
        for(let i of p.digests){
            item.push(<Card key={i.guid} {...i} onLike={p.like} onDetail={p.seeDetail}/>)
        }
        const more = <div style={{textAlign:'center'}}>{ p.currentIndex < p.digestPath.length ?<Button onClick={p.fetchDigest}> --load more -- </Button>:'--no any more--'}</div>;
        return <div>
        <div>{item}</div>
        {more}
        </div>;
    }
)


export default function (p) {
    const style = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return <Box className={style.box}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={style.tab}>
            <Tab label="Timeline" />
            <Tab label="Pined" />
        </Tabs>
        <TabPanel index={0} value={value}>
            <TimeLineList />
        </TabPanel>
        <TabPanel index={1} value={value}>
            <List />
        </TabPanel>
    </Box>
}