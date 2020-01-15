import octokit from '@octokit/rest';
import moment from 'moment';
import {readBlob, b64toBlob} from '@/util/reader'
import yaml from 'yaml';
const guid = require('node-uuid');
const config = require('@/config.json');

const sdk = new octokit();
const {repo, owner} = config;

function tsToDate(ts:number){
    const d = moment(ts)
    return d.format('YYYYMMDD')
}

export async function getDigestList(){
    const path = '/digest/';
    const res = await sdk.repos.getContents({repo, owner, path});
    if(res.data && res.data instanceof Array){
        return res.data.slice(0, 100)
    }
    return []
}

export async function getDigest(path:string){
    const res = await sdk.repos.getContents({repo, owner, path});
    if (res.data && ! (res.data instanceof Array) && res.data.content){
        const content = b64toBlob(res.data.content)
        const text = await readBlob(content);
        const data=  yaml.parse(text);
        if (data instanceof Array) {
            return data
        }
        return []
    }
    throw Error(String(res));
}

export async function getFavourite(){
    const path = '/favourite/index.yaml';
    const res = await sdk.repos.getContents({repo, owner, path});
    if (res.data && (res.data as any)['content']){
        const content = b64toBlob((res.data as any).content)
        const text = await readBlob(content);
        const data=  yaml.parse(text);
        if (data instanceof Array) {
            return data
        }
        return []
    }
    throw Error(String(res));
}

export async function getAllDigest(){
    const res = await sdk.issues.listForRepo({owner, repo, labels:'digest'});
    if (res.data && res.data instanceof Array){
        return res.data.filter(el=>el.user.login === owner);
    }
    return []
}

export async function getIssueDigest(issue:number){
    const res = await sdk.issues.listComments({owner, repo, issue_number:issue});
    if (res.data && res.data instanceof Array){
        const out = res.data.filter(el=>el.user.login === owner).map(el=>{
            const item = {...(yaml.parse(el.body)), origin: el, issue};
            return item
        });

        const likes = await getLikes(out.map(el=>el.origin.id));
        likes.forEach((it, idx)=>{
            out[idx].likes = it
        })
        return out;
    }
    return [];
}

function getLikes(comments:number[]){
    const p = comments.map(c=>sdk.reactions.listForIssueComment({comment_id:c, content:'+1', owner, repo})
        .then(res=>res.data.length));
    return Promise.all(p);
}