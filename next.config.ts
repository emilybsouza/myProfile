const isProd = process.env.NODE_ENV === "production";
const repositoryName = "myProfile";

module.exports = {
  output: "export",
  basePath: isProd ? `/${repositoryName}` : "",
  assetPrefix: isProd ? `/${repositoryName}/` : "",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
