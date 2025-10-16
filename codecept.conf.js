const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
require("dotenv").config();
require("./heal");
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
  url: "http://localhost:3000",
      show: true,
    },
    // AI helper disabled to avoid errors
  },
  include: {
    I: "./steps_file.js",
  },
  name: "SWT",
  ai: { enabled: false, request: async () => "" },
  plugins: {
    heal: { enabled: false },
    // analyze: {
    //   enabled: true,
    //   analyze: 3,
    //   clusterize: 5,
    //   vision: false,
    // },
    // pageInfo: { enabled: true },
  },
};
