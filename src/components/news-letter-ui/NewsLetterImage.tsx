import { Image, Text, Stack } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterImageProps = NewsLetterComponent & {
    url: string;
    alt: string;
    caption?: string;
}

export const NewsLetterImage: FC<NewsLetterImageProps> = ({ url, alt, caption }) => {
  return (
    <Stack align='center' mb='md'>
      <Image src={url} alt={alt} radius='md' />
      {caption && <Text size='sm' c='dimmed'>{caption}</Text>}
    </Stack>
  );
}
