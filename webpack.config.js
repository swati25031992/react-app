var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
                }
              }
            ]
          }
    
        ]
      }
    
}
