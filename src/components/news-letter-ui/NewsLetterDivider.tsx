import { Divider } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterDividerProps = NewsLetterComponent;

export const NewsLetterDivider: FC<NewsLetterDividerProps> = () => {
  return <Divider my='lg' />;
}
