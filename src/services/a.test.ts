import {getDigestList, getDigest, getFavourite} from './api';

it('getDigestList', (cb)=>{
    async function task(){
        const list = await getDigestList()
        if (list.length > 0) {
            const digest = await getDigest(list[0].path)
            console.log(digest);
        } 
    }
    task().then(_=>cb()).catch(err=>cb(err))
}, 3000)

it('getDigest', (cb)=>{
    getDigest('/digest/20200110.yaml').then(res=>{
        expect(res).toBeTruthy()
        cb()
    }).catch(err=>cb(err))
}, 2000)

it('getFavourite', (cb)=>{
    getFavourite().then(res=>{
        expect(res).toBeTruthy()
        cb()
    }).catch(err=>cb(err))
}, 2000)