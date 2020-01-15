import octokit from '@octokit/rest';
import moment from 'moment';
import yaml from 'yaml';
const secConfig = require('@/secret.json');
const config = require('@/config.json');
const { repo, owner } = config;

function getToday() {
    return moment().format('YYYYMMDD');
}
const sdk = new octokit({
    auth: {
        clientId: secConfig.clientId,
        clientSecret: secConfig.clientSecret
    }
});
interface Item {
    title: string;
    tag: string;
    author: string;
    description: string;
    link: string;
    abstract: string;
}
async function main(data: Item[]) {
    const title = '/digest/' + getToday();
    const body = `today's digest`;
    const res = await sdk.issues.create({ repo, owner, title, body });
    if (typeof res.data.number === 'undefined') {
        return;
    }
    const issue = res.data.number;
    const p = data.map(el => sdk.issues.createComment({
        repo, owner, body: yaml.stringify(el), issue_number: issue
    }));

    const comments = await Promise.all(p);

    const pp = comments.map(el => sdk.reactions.createForIssueComment({
        repo, owner, comment_id: el.data.id, content: "+1"
    }))
    await Promise.all(pp);
}

main([
    {
        "title": "原创的",
        "tag": "original tag2",
        "author": "fourf",
        "description": "description",
        "link": "https://www.github.com/223",
        "abstract": "对于抑郁，恐怕大家多少都 原创的",
    },
    {
        "title": "原创的2",
        "tag": "original tag2",
        "author": "fourf",
        "description": "description",
        "link": "https://www.github.com/11",
        "abstract": "对于抑郁，恐怕大家多少都 原创的",
    }
]).then(res=>console.log('done')).catch(res=>console.error('error'));
