const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesJavaScript = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const rulesStyles = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

const rules = [rulesJavaScript, rulesStyles]

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.jsx',
    output: {
      filename: isProduction
        ? '[name].[contenhash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'public')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3000,
      compress: true
    }
  }
}
