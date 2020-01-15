import GlobalModel, {namespace as globalName} from './global';

export type AppState = {
    [globalName]: typeof GlobalModel.state;
}

