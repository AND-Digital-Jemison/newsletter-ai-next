import { Anchor } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterLinkProps = NewsLetterComponent &  {
    url: string;
    text: string;
}

export const NewsLetterLink: FC<NewsLetterLinkProps> = ({ url, text })=>  {
  return (
    <Anchor href={url} target='_blank' rel='noopener noreferrer'>
      {text}
    </Anchor>
  );
}
