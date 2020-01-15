import {EnhancedModel as Model, Action} from 'dva';
import {getDigestList, getDigest, getIssueDigest, getAllDigest} from '@/services/api';
import {createAction} from '@/util/createaction';
import {IssuesListResponseItem, IssuesListCommentsResponseItem} from '@octokit/rest';
export interface DigestItem {
  issue: number;
  likes: number;
  title: string;
  tag: string;
  author: string;
  description: string;
  link: string;
  abstract: string;
  origin: IssuesListCommentsResponseItem
}
interface State {
  digestPath: IssuesListResponseItem[];
  digestList: Array<DigestItem>;
  currentIndex: number;
}
export const namespace = 'global';
export const actions = {
  set: (state:Partial<State>) => createAction('global/set', state),
  init: () => createAction('global/init'),
  fetchDigest: () => createAction('global/fetchDigest'),
  like: (issueId:number,commentId:number) => createAction('global/like', {issueId, commentId}),
  seeDetail: (issueId:number,commentId:number) => createAction('global/seeDetail', {issueId, commentId})
};
const mm:Model<State> = {
  namespace,
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
      const res = yield call(getAllDigest);
      yield put(actions.set({digestPath: res}));
      if (res.length > 0) {
        yield put(actions.fetchDigest());
      } 
    },
    *fetchDigest({ type, payload }, { put, call, select }){
      const {digestList, currentIndex, digestPath} = (yield select((s:any)=>s.global)) as State;
      if (currentIndex >= digestPath.length){
        return
      }
      const digest = yield call(getIssueDigest, digestPath[currentIndex].number);
      yield put(actions.set({
        digestList: digestList.concat(digest), currentIndex: currentIndex+1,
      }))
    },
    *like({ type, payload }, { put, call, select }){
      const {digestList} = (yield select((s:any)=>s.global)) as State;
      const target = digestList.find(el=>el.issue===payload.issueId && el.origin.id === payload.commentId);
      if (target) {
        target.likes += 1;
        yield call(window.open, `https://github.com/FourF-src/ngate-data/issues/${payload.issueId}#issuecomment-${payload.commentId}`)
        yield put(actions.set({digestList:[...digestList]}))
      }
    },
    *seeDetail({ type, payload }, { put, call, select }){
      const {digestList} = (yield select((s:any)=>s.global)) as State;
      const target = digestList.find(el=>el.issue===payload.issueId && el.origin.id === payload.commentId);
      if (target) {
        yield call(window.open, target.link);
      }
    }
  },
}

export default mm;