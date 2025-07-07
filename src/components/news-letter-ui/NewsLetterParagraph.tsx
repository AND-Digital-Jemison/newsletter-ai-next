import { Text } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterParagraphProps = NewsLetterComponent &  {
    content: string;
}

export const NewsLetterParagraph: FC<NewsLetterParagraphProps> = ({ content })=>  {
  return (
    <Text>
      {content}
    </Text>
  );
}
