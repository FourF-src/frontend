import {AnyAction} from 'redux';
import { Model } from 'dva';

declare module '*.css';
declare module "*.png";

export interface Action extends AnyAction {
    type: string
}

declare module 'dva' {
    export interface Action extends AnyAction {
        type: string
    }
    export interface EnhancedModel<T> extends Model{
        state: T;
    }
}