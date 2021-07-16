const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app/app.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      include: {
        or: [path.resolve(process.cwd(), 'app')],
      },
      use: {
        loader: require.resolve('babel-loader'),
      },
    }],
  },
}
