import { NextFunction, Request, Response } from "express";

import AppError from "../../utils/error";
import TMDB from "../../utils/tmdb";

class Controllers {
	public async search(req: Request, res: Response, next: NextFunction) {
		try {
			const api_key: string | null = (req.query.api_key as string) || null;
			const { show } = req.body as { show: string };
			const { total_results, results } = await TMDB.search(show, api_key);
			res.status(200).send({ show, total_results, results });
		} catch (e) {
			const message: string = e.response.data.Error || e.response.statusText;
			const error: AppError = new AppError(e.response.status, message);
			next(error);
		}
	}
}

export default new Controllers().search;
