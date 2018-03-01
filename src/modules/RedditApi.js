import qs from 'qs';

export class RedditApi {
  constructor() {
    this.hostName = 'https://www.reddit.com';
    this.sr = '/r/AskReddit';
    this.contentType = '/.json';
  }

  getUrl(paramStr) {
    return `${this.hostName}${this.sr}${this.contentType}?${paramStr}`;
  }

  async threadList(params) {
    const paramStr = qs.stringify(params);
    const url = this.getUrl(paramStr);
    const res = await fetch(url);

    return res.json().catch(this.handleError);
  }

  async thread(permalink) {
    const res = await fetch(`${this.hostName}${permalink}${this.contentType}`);

    return res.json().catch(this.handleError);
  }

  handleError(error) {
    throw new Error(`Reddit API call failed: ${error}`);
  }
}

export default new RedditApi();
