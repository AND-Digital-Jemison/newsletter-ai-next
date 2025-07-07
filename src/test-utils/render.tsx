import { ReactNode } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

export const render = (ui: ReactNode) => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider env='test'>{children}</MantineProvider>
    ),
  });
}
