var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './src'
    ],
    output: {
        path: __dirname,
        filename: './build/index.js'
    },
    plugins: [
        new webpack.DefinePlugin({ //hydrate the client with data on its runtime environent
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({ //don't require react in every js file
            'React': 'react'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                "presets": ["es2015", "stage-0", "react"],
                "plugins": ["syntax-async-functions", "transform-regenerator"]
            }
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    }
};
