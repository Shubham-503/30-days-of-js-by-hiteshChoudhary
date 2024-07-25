// webpack.config.mjs

import path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname are not available in ESM. Use the following to get equivalent values:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};
