import request from "supertest";
import "jest-extended";

import app from "./app";
import Response from "./types";

describe("POST /search", () => {
	test("1. Search for show that exists", async (done) => {
		const show = "blue bloods";
		const res = await request(app).post(`/search`).send({ show }).expect(200);
		const resObject: Response = JSON.parse(res.text);

		// assertions
		expect(resObject).toContainAllKeys(["show", "total_results", "results"]);
		expect(resObject).toContainEntry(["show", show]);
		expect(typeof resObject.total_results).toBe("number");
		expect(resObject.results).toBeArray();

		done();
	});

	test("2. Search for show that does NOT exist", async (done) => {
		const show = "this_show_should_not_exist";
		const res = await request(app).post(`/search`).send({ show }).expect(200);
		const resObject: Response = JSON.parse(res.text);

		// assertions
		expect(resObject.total_results).toBe(0);

		done();
	});

	test("3. Request for route that does not exist", async (done) => {
		const route = "/this_route_does_not_exist";
		const show = "blue bloods";
		const res = await request(app).post(route).send({ show }).expect(404);
		const resObject: Response = JSON.parse(res.text);

		// assertions
		expect(resObject).toContainAllEntries([
			["statusCode", 404],
			["message", "Page Not Found"],
		]);

		done();
	});

	test("4. Search for show with bad authentication credentials", async (done) => {
		const show = "blue bloods";
		const api_key = "this_is_a_bad_api_key";
		const res = await request(app)
			.post(`/search?api_key=${api_key}`)
			.send({ show })
			.expect(401);
		const resObject: Response = JSON.parse(res.text);

		// assertions
		expect(resObject).toContainAllEntries([
			["statusCode", 401],
			["message", "Unauthorized"],
		]);

		done();
	});
});
