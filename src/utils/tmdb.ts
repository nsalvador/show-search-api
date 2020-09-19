import axios, { AxiosStatic } from "axios";

import Show from "../types";

abstract class HttpClient {
	protected instance: AxiosStatic;

	public constructor(baseURL: string) {
		this.instance = axios;
		this.instance.defaults.baseURL = baseURL;
	}
}

class TMDB extends HttpClient {
	public constructor() {
		super(`https://api.themoviedb.org/3`);
	}

	public async search(query: string, api_key: string | null) {
		const { data } = await this.instance.get<Show>(`/search/tv`, {
			params: {
				query,
				api_key: api_key || `${process.env.TMDB_API_KEY}`,
			},
		});
		return data;
	}
}

export default new TMDB();
