module.exports = [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        ignores: ["node_modules/**", ".next/**"],
        languageOptions: {
            parser: require("@typescript-eslint/parser"),
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            globals: { window: true, document: true, navigator: true },
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        },
        // Minimal rule set for this project
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
            "no-console": ["warn", { "allow": ["warn", "error"] }],
        },
        linterOptions: {
            reportUnusedDisableDirectives: "warn",
        },
    },
]
