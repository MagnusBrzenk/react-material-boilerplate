import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
const isProduction: boolean = process.env.NODE_ENV === "production";

export function getCSSLoaderArray(styleType: "css" | "scss" | "less", isModule: boolean) {
  const config = [
    !isProduction && "css-hot-loader",
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      query: {
        modules: !!isModule,
        sourceMap: !isProduction,
        importLoaders: styleType === "css" ? 0 : 1,
        localIdentName: "[local]__[hash:base64:5]"
      }
    },
    styleType === "scss" && "sass-loader",
    styleType === "less" && "less-loader"
  ].filter(Boolean) as webpack.RuleSetUse;

  return config;
}

export default getCSSLoaderArray;
