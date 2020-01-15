const pinyin4js = require('pinyin4js');

export function getpy(str:string){
    return pinyin4js.getShortPinyin(str);
}