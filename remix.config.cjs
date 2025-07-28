/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  serverBuildTarget: "cloudflare-pages",
  serverBuildPath: "functions/[[path]].js",
  ignoredRouteFiles: ["**/.*"],
};
