const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const baseConfig = {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        }
      ]
    }
  };

  const clientConfig = {
    ...baseConfig,
    name: 'client',
    entry: './ClientApp/src/entry-client.tsx',
    output: {
      path: path.resolve(__dirname, 'wwwroot/dist'),
      filename: 'client.bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],
    optimization: {
      usedExports: true, // Disable tree shaking
      sideEffects: true,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
  };

  const serverConfig = {
    ...baseConfig,
    name: 'server',
    entry: './ClientApp/src/entry-server.tsx',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'wwwroot/dist'),
      filename: 'server.bundle.js',
      library: {
        type: 'commonjs'
      }
    },
    externals: {
      // React libraries should be external in server bundle to avoid dual-instance issues
      // if we were using a shared node_modules, but since we bundle everything for the isolated Node process,
      // we might want to bundle them. However, for a clean "node -e" execution, bundling is safer 
      // unless we want to require() them from node_modules in the runtime.
      // For this specific architecture (isolated process), bundling is usually easier.
    },
    module: {
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.css$/,
          use: 'null-loader' // Ignore CSS on server
        }
      ]
    }
  };

  return [clientConfig, serverConfig];
};
