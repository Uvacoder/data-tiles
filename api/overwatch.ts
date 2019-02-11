import fetch from 'unfetch'

export default class ServiceOverwatch {
    private baseURL: string;

    constructor() {
        this.baseURL = 'https://ow-api.com/v1';
    }

    public async getProfile(user, platform = "pc", region = "eu") {
        const endpoint = `/stats/${platform}/${region}/${user}/profile`
        const res = await this.createRequest(endpoint)
        const data = await res.json()
        return {
            ok: res.ok,
            status: res.status,
            data
        }
    }

    private async createRequest(endpoint) {
        const url = `${this.baseURL}${endpoint}`
        return fetch(url);
    }
}