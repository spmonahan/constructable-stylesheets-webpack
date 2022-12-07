const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-syntax-import-assertions']
                    }
                }
            },
            {
                loader: 'css-loader',
                assert: { type: 'css' },
                options: {
                    // Enable CSS modules with named exports
                    // See: https://github.com/webpack-contrib/css-loader/blob/master/src/utils.js#L662
                    modules: {
                        namedExport: true
                    },
                    // Create a Constructable Stylesheet
                    exportType: 'css-style-sheet',
                    // Needed for namedExport
                    // See: https://github.com/webpack-contrib/css-loader/blob/master/src/utils.js#L676
                    esModule: true
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
};