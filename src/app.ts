import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import Routes from "./routes";
import AppError from "./utils/error";

class App {
	public express: express.Application;

	public constructor() {
		this.express = express();
		this.config();
		this.middleware();
		this.routes();
		this.errors();
	}

	private config(): void {
		dotenv.config();
	}

	private middleware(): void {
		this.express.use([cors(), express.json()]);
	}

	private routes(): void {
		this.express.use(`/search`, Routes);
	}

	private errors(): void {
		this.express.use([
			(req: Request, res: Response, next: NextFunction) => {
				const error = new AppError(404, `Page Not Found`);
				next(error);
			},
			(error: Error, req: Request, res: Response, next: NextFunction) => {
				const { statusCode, message } = error as AppError;
				res.status(statusCode).send({
					statusCode,
					message,
				});
			},
		]);
	}
}

export default new App().express;
