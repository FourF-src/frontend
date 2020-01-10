import {getDigest, getFavourite} from './test';

it('getDigest', (cb)=>{
    getDigest(Date.now()).then(res=>{
        console.log(res)
        expect(res).toBeTruthy()
        cb()
    }).catch(err=>cb(err))
}, 2000)

it('getFavourite', (cb)=>{
    getFavourite().then(res=>{
        console.log(res)
        expect(res).toBeTruthy()
        cb()
    }).catch(err=>cb(err))
}, 2000)