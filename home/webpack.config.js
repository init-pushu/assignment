const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: 'home',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        search1: 'search1@http://localhost:4201/remoteEntry.js',
      },
      shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }),
  ],
};
