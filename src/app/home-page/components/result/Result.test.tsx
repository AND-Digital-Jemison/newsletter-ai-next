import { render, screen, userEvent } from '@/test-utils';
import { Result, ResultProps } from './Result';

import { useClipboard } from '@mantine/hooks';

import { Tags } from '@/types';

const mockCopy = jest.fn();

jest.mock('@mantine/hooks', () => ({
  ...jest.requireActual('@mantine/hooks'),
  useClipboard: jest.fn()
}));

const mockResult: ResultProps = {
  result: {
    content: 'mock content',
    tag: Tags.APIs
  }
}

const setup = (props = mockResult) =>
  render(<Result {...props} />);

describe('Result', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useClipboard as jest.Mock).mockReturnValue({
      copy: mockCopy,
      copied: false,
    });
  })

  it('should render the result', () => {
    setup();

    expect(screen.getByText('mock content')).toBeInTheDocument();
    expect(screen.getByText('APIs')).toBeInTheDocument();
  })

  it('should call clipboard.copy when clicked', async () => {
    setup();

    const button = screen.getByRole('button');
    const user = userEvent.setup();

    await user.click(button);

    expect(mockCopy).toHaveBeenCalledTimes(1);
    expect(mockCopy).toHaveBeenCalledWith('mock content');
  })

  describe('toast', () => {
    it('should not render a toast if nothing has been copied', () => {
      setup();

      expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
    })

    it('should render a toast if something has been copied', () => {
      (useClipboard as jest.Mock).mockReturnValue({
        copy: mockCopy,
        copied: true,
      })

      setup();

      expect(screen.getByTestId('toast')).toBeInTheDocument();
    })
  })
})
