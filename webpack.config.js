const path = require("path" )

module.exports = {
    entry: "./entry.ts",
    target: "electron",
    output: {
        path: __dirname + "/dist'",
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/dist/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    }
};
