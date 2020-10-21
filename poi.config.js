module.exports = {
  entry: "src/index",
  plugins: [],
  output: {
    publicUrl: "/testing/",
  },
  devServer: {
    historyApiFallback: true,
  },
};
