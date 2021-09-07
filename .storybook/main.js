const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-docs',
  ],
}