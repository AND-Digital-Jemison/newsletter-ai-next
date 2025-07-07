import { DEFAULT_THEME, MantineThemeOverride } from '@mantine/core';

export const themeOverride: MantineThemeOverride = {
  colors: {
    'and-red': [
      '#ffe6e9',
      '#fcbec5',
      '#f9959f',
      '#f46c77',
      '#ef4452',
      '#d82036',
      '#b5182d',
      '#931223',
      '#700c1a',
      '#4e0511',
    ],
    'highlight-blue': [
      '#e1f8ff',
      '#cbedff',
      '#9ad7ff',
      '#64c1ff',
      '#3aaefe',
      '#20a2fe',
      '#099cff',
      '#0088e4',
      '#0079cd',
      '#0068b6'
    ]
  },
  fontFamily: 'Poppins, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `Poppins, ${DEFAULT_THEME.fontFamily}`,
  },
};
