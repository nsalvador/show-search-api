import express, { IRouter } from "express";

import Search from "../api/controllers";

class Routes {
	public router: IRouter;

	constructor() {
		this.router = express.Router();
		this.routes();
	}

	private routes() {
		this.router.post(`/`, Search);
	}
}

export default new Routes().router;
