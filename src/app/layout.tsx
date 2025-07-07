import '@mantine/core/styles.css';
import './main.css';
import './fonts.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';
import { themeOverride } from './theme';

export const metadata = {
  title: 'Orbit Prototype',
  description: 'An application for summarising web content',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme(themeOverride);

  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript/>
      </head>

      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
