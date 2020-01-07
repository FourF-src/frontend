import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {deepOrange, deepPurple, red, green} from '@material-ui/core/colors';
import clsx from 'clsx'
const useStyles = makeStyles((theme:Theme)=>createStyles({
    root: {
        backgroundColor:(p:any)=>{
            if (typeof p.children === 'string'){
                const res = p.children.charCodeAt(0) % 4
                return ([red[500],deepPurple[500],deepOrange[500], green[500]])[res]
            }
            return ''
        },
        color: (p:any)=>{
            if (typeof p.children === 'string'){
                const res = p.children.charCodeAt(0) % 4
                const bg = ([red[500],deepPurple[500],deepOrange[500], green[500]])[res]
                return theme.palette.getContrastText(bg)
            }
            return ''
        }
    }
}));

export default function decorate<T>(El:React.ComponentClass<T>|React.FC<T>):React.FC<T>{
    return function(p){
        const style = useStyles(p)
        const className = (p as any).className|| '';
        return <El {...p} className={clsx(className, style.root)} />
    }
}
