import { List } from '@mantine/core';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterBulletListProps = NewsLetterComponent & {
    items: string[];
}

export const NewsLetterBulletList: FC<NewsLetterBulletListProps> = ({ items }) => {
  return (
    <List mb='md'>
      {items.map((item, idx) => (
        <List.Item key={idx}>{item}</List.Item>
      ))}
    </List>
  );
}
