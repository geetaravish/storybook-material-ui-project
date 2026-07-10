module.exports = {
  stories: ['../src/stories/**/*.stories.jsx'],
  addons: [
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};