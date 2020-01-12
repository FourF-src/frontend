import {Model, Action} from 'dva';
import {getDigestList, getDigest} from '@/services/api';
import {createAction} from '@/util/createaction';

interface State {
  digestPath: any[];
  digestList: any[];
  currentIndex: number;
}
export const actions = {
  set: (state:Partial<State>) => createAction('global/set', state),
  init: () => createAction('global/init'),
  fetchDigest: (path:string) => createAction('global/fetchDigest', {path}),
};
const mm:Model = {
  namespace: 'global',
  state: {
    digestPath: [],
    digestList: [],
    currentIndex: 0
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch(actions.init())
    },
  },
  reducers: {
    set(state, {payload}:Action) {
      return {...state, ...payload}
    },
  },
  effects: {
    *init({ type, payload }, { put, call, select }) {
      const res = yield call(getDigestList);
      yield put(actions.set({digestPath: res}));
      if (res.length > 0) {
        const {currentIndex, digestList} = yield select((s:any)=>s.global);
        const digest = yield call(getDigest, res[currentIndex].path);

        yield put(actions.set({digestList: [...digestList, ...digest]}))
      } 
    },
  },
}

export default mm;