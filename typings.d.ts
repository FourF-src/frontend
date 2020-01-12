import {AnyAction} from 'redux';

declare module '*.css';
declare module "*.png";

export interface Action extends AnyAction {
    type: string
}

declare module 'dva' {
    export interface Action extends AnyAction {
        type: string
    }
}