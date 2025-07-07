import { Title } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterHeadingProps = NewsLetterComponent &  {
    content: string;
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const NewsLetterHeading: FC<NewsLetterHeadingProps> = ({ level, content }) => {
  return <Title order={level}>{content}</Title>;
}
