const path = require("path" )

module.exports = {
    entry: "./entry.ts",
    target: "electron",
    output: {
        path: __dirname + "/dist'",
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/dist/'
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
