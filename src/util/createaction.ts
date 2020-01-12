import {AnyAction} from 'redux';
export function createAction (type:string, payload?:any):AnyAction{
    return {
        type, payload
    }
}

