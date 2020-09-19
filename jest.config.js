module.exports = {
	testEnvironment: "node",
	roots: ["<rootDir>/src"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	setupFilesAfterEnv: ["jest-extended"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
