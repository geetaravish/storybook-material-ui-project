import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light', // or 'dark'
  colorPrimary: '#1976d2', // Material-UI primary color
  colorSecondary: '#dc004e', // Material-UI secondary color

  // UI
  appBg: '#ffffff',
  appContentBg: '#f0f0f0',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1976d2',
  barBg: '#f0f0f0',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e0e0e0',
  inputTextColor: '#333333',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
});