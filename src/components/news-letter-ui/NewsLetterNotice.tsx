import { Alert, Anchor } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterNoticeProps = NewsLetterComponent & {
    text: string;
    url?: string;
}

export const NewsLetterNotice: FC<NewsLetterNoticeProps> = ({ text, url }) => {
  return (
    <Alert icon={<IconInfoCircle />} color='blue' mb='md'>
      {url ? <Anchor href={url} target='_blank'>{text}</Anchor> : text}
    </Alert>
  );
}
