import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";

export default function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
          },
      },
      "postcss-loader",
      "sass-loader",
    ],
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }

  return [
    typescriptLoader,
    cssLoader,
    fontsLoader
  ]
}