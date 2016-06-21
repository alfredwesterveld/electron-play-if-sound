const path = require("path" )

module.exports = {
    entry: "./module.ts",
    target: "electron",
    output: {
        filename: 'index.js',
        library: true,
        libraryTarget: 'commonjs2'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Add '.ts' and '.tsx' as resolvable extensions.
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]

    }
};
