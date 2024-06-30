const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = {
    cache: false,
    entry: path.join(__dirname, "src", "index.tsx"),

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },

    output: {
        filename: "stock.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(scss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            cache: false,
        }),
        new ModuleFederationPlugin({
            name: "StockApp",
            filename: "remoteEntry.js",
            exposes: {
                "./StockGraph": "./src/stock-graph/StockGraph",
            },
            shared: {
                ...deps,
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                react: {
                    singleton: true,
                    requiredVersion: deps["react"],
                },
            },
        }),
    ],

    devServer: {
        hot: true,
        static: path.join(__dirname, "dist"),
        port: 3001,
        open: true,
    },
};
