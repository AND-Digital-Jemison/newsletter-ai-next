import { ChangeEvent, FormEvent } from 'react';

export type QueryInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  value: string;
}
