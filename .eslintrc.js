module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: './'
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', 'eslint-plugin-tsdoc', '@typescript-eslint', 'import', 'eslint-plugin-tsdoc'],
    ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
    rules: {
        "tsdoc/syntax": "warn",
        'no-console': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-underscore-dangle': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                moduleDirectory: ['node_modules', 'src/'],
            },
            "typescript": {}
        },
    },
};
