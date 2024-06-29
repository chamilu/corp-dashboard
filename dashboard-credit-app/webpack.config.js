const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

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
            filename: "credit.[hash].js",
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
                name: "CreditApp",
                filename: "remoteEntry.js",
                exposes: {
                    "./CreditGraph": "./src/credit-graph/CreditGraph",
                },
                shared: {
                    "react-dom": {
                        singleton: true,
                        eager: true,
                    },
                    react: {
                        singleton: true,
                        eager: true,
                    },
                },
            }),
        ],

        devServer: {
            hot: true,
            static: path.join(__dirname, "dist"),
            port: 3002,
            open: true,
        },
    };
};

module.exports = config;
