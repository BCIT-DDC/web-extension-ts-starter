/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'static' }],
        }),
    ],
    entry: {
        'background.bundle': path.join(srcPath, 'Background', 'index.ts'),
        'content-script.bundle': path.join(
            srcPath,
            'ContentScript',
            'index.ts',
        ),
        popup: path.join(srcPath, 'popup', 'index.tsx'),
    },
    output: {
        path: path.join(rootPath, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            // Treat src/css/app.css as a global stylesheet
            {
                test: /\app.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            // Load .module.css files as CSS modules
            {
                test: /\.module.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    // Setup @src path resolution for TypeScript files
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@src': path.resolve(rootPath, 'src'),
            '@components': path.resolve(rootPath, 'src', 'components'),
        },
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
};
