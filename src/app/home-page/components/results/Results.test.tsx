import { render, screen } from '@/test-utils';
import { Results } from './Results';
import { ResultsProps } from './types';
import { Tags } from '@/types';
import { ReactNode } from 'react';
import { Result } from '../result/Result';

jest.mock('@mantine/core', () => ({
  ...jest.requireActual('@mantine/core'),
  // ScrollArea seems to have some issue with the Virtual DOM
  ScrollArea: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}))

jest.mock('../result/Result', () => ({
  Result: jest.fn(props => <div data-testid='result' {...props} />)
}))

const MOCK_RESULTS: ResultsProps['results'] = [
  {
    content: 'mock content',
    tag: Tags.APIs
  }
];

const setup = () =>
  render(<Results results={MOCK_RESULTS} />);

describe('Results', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('should display the results length', () => {
    setup();

    expect(screen.getByText(/displaying 1 results./i)).toBeInTheDocument();
  })

  it('should display the results and passes the correct props', () => {
    setup();

    expect(screen.getByTestId('result')).toBeInTheDocument();
    expect(Result).toHaveBeenCalledWith(
      expect.objectContaining({
        result: {
          content: 'mock content',
          tag: Tags.APIs,
        },
      }),
      undefined
    );
  })
});
