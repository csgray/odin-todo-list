// webpack.common.js
import HtmlWebpackPlugin from "html-webpack-plugin";
import {resolve} from "path";

export default {
    // Required for all projects
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: resolve(process.cwd(), "dist"),
        clean: true,
    },
    plugins: [
        // Bundle HTML file
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            // Bundle CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Order matters!
            },
        ]
    }
};
