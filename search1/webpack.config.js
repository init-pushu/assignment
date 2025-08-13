const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: 'search1',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'search1',
      filename: 'remoteEntry.js',
      exposes: {
        './SearchComponent': './src/app/search/search.component.ts',
      },
      shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }),
  ],
};
