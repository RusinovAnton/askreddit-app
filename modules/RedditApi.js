import qs from 'qs';

export class RedditApi {
  getUrl(paramStr) {
    const hostName = 'https://www.reddit.com';
    const sr = '/r/AskReddit';
    const contentType = '/.json';

    console.log(paramStr);

    return `${hostName}${sr}${contentType}?${paramStr}`;
  }

  async threadList(params) {
    const paramStr = qs.stringify(params);
    const url = this.getUrl(paramStr);
    const res = await fetch(url);

    return res.json();
  }
}

export default new RedditApi();
