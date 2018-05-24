const webpack = require("webpack");
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ["transform-runtime", "transform-object-rest-spread"],
              presets: ['env'],
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                plugins: ["transform-runtime", "transform-object-rest-spread"],
                presets: ['env'],
              }
            },
          },
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              root: __dirname + '/'
            }
          }
        ]
      },
    ],
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080
  }
}
