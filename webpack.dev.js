// webpack.dev.js
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode: "development",
    // Source map for better debugging
    devtool: "eval-source-map",
    // Automatically reloads when JavaScript or watched files change
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});