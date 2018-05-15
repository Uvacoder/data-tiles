export default class ServiceLastFM {
    private apiKey: string;

    private baseURL = 'http://ws.audioscrobbler.com/2.0/';

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error('missing apiKey parameter');
        }
        
        this.apiKey = apiKey;
    }

    async createRequest(endpoint: string) {
        const url = `${this.baseURL}?method=${endpoint}&api_key=${this.apiKey}&format=json`
        return fetch(url);
    }

    public async getRecentTracks(user: string) {
        const endpoint = `user.getrecenttracks&user=${user}`
        const res = await this.createRequest(endpoint)
        const data = await res.json()
        return data.recenttracks;
    }
}