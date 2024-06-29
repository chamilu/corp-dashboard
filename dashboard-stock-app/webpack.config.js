const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, { mode }) => {
    const isProduction = mode === "production";

    return {
        mode,
        entry: path.join(__dirname, "src", "index.tsx"),
        
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        },

        output: {
            publicPath: "/",
            filename: "[name].[chunkhash].js",
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
        ],

        devServer: {
            hot: true,
            port: 3001,
            open: true,
            historyApiFallback: true,
        },
    };
};

module.exports = config;
