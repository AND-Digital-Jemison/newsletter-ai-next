import { render, screen, userEvent } from '@/test-utils';
import { QueryInputProps } from './types';
import { QueryInput } from './QueryInput';
import { FormEvent } from 'react';

const mockOnChange = jest.fn();
const mockOnSubmit = jest.fn();

const mockProps: QueryInputProps = {
  onChange: mockOnChange,
  onSubmit: (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mockOnSubmit();
  },
  loading: false,
  value: 'mock value'
}

const setup = (props: QueryInputProps = mockProps) =>
  render(<QueryInput {...props} />);

describe('QueryInput', () => {
  it('should render the query input', () => {
    setup();

    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('should call onChange callback on change', async () => {
    setup();

    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'test');

    expect(mockOnChange).toHaveBeenCalledTimes(4);
  })

  it('should call onSubmit callback on submit', async () => {
    setup();

    const user = userEvent.setup();
    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  })
});
