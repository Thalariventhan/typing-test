import { defineConfig, RsbuildConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";
import CompressionPlugin from "compression-webpack-plugin";

const rsbuildPlugins = [
  pluginBabel({
    include: /\.(?:jsx|tsx)$/,
  }),
  pluginSolid(),
];

const rspackPlugins = async (config) => {
  config.plugins?.push(
    new CompressionPlugin({
      filename: 'compressed/[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|html|svg|css)$/,
      minRatio: 0.9,
    })
  );
  return config;
}

export default defineConfig({
  html: {
    title: "Typer",
  },
  output: {
    minify: true,
    polyfill: 'usage',
    distPath: {
      root: "dist",
    }
  },
  server: {
    compress: true,
  },
  plugins: rsbuildPlugins,
  tools: {
    rspack: rspackPlugins,
  },
} as RsbuildConfig);