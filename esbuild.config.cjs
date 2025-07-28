console.log("✅ esbuild.config.cjs loaded");

const fs = require("fs/promises");

/**
 * @type {import('@remix-run/dev').EsbuildConfig}
 */
module.exports = (config) => {
  config.plugins = config.plugins || [];

  config.plugins.push({
    name: "handle-glsl-raw",
    setup(build) {
      build.onLoad({ filter: /\.glsl\?raw$/ }, async (args) => {
        const text = await fs.readFile(args.path.split("?")[0], "utf8");
        return {
          contents: JSON.stringify(text),
          loader: "js",
        };
      });
    },
  });

  return config;
};
