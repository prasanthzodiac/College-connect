module.exports = {
	root: true,
	overrides: [
		{
			files: ["**/*.ts"]
		}
	],
	extends: ["eslint:recommended", "prettier"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	env: { node: true, es2022: true }
}

