const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

const config = (env, { mode }) => {
    const isProduction = mode === "production";

    return {
        mode,
        cache: false,
        entry: path.join(__dirname, "src", "index.tsx"),

        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        },

        output: {
            filename: "shell.[hash].js",
            path: path.resolve(__dirname, "dist"),
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)?$/,
                    exclude: /node_modules/,
                    use: "babel-loader",
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
                cache: isProduction,
            }),
            new ModuleFederationPlugin({
                name: "ShellApp",
                remotes: {
                    StockApp: "StockApp@http://localhost:3001/remoteEntry.js",
                    CreditApp: "CreditApp@http://localhost:3002/remoteEntry.js",
                },
            }),
        ],

        devServer: {
            hot: true,
            static: path.join(__dirname, "dist"),
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
    };
};

module.exports = config;
