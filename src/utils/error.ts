export default class AppError extends Error {
	public constructor(public statusCode: number, message: string) {
		super(message);
	}
}
