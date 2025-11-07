module.exports = {
	root: true,
	overrides: [
		{
			files: ["**/*.{ts,tsx}"]
		}
	],
	extends: [
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		"plugin:react-refresh/recommended",
		"prettier"
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	env: { browser: true, es2022: true, node: true }
}

