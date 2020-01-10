import octokit from '@octokit/rest';
import moment from 'moment';
import {readBlob, b64toBlob} from '@/util/reader'
import yaml from 'yaml';
const sdk = new octokit();
const repo = 'ngate-data';
const owner = 'FourF-src';
function tsToDate(ts:number){
    const d = moment(ts)
    return d.format('YYYYMMDD')
}



export async function getDigest(ts:number){
    const path = '/digest/'+tsToDate(ts)+'.yaml';
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
