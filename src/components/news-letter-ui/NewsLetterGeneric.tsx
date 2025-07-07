import {
  NewsLetterHeading,
  NewsLetterParagraph,
  NewsLetterImage,
  NewsLetterLink,
  NewsLetterDivider,
  NewsLetterBulletList,
  NewsLetterNotice
} from '.';
import { NewsletterBlock } from '@/types';
import { FC } from 'react';
import { NewsLetterComponent } from './types';

type NewsLetterGenericProps = NewsLetterComponent &  {
    block: NewsletterBlock;
}

export const NewsLetterGeneric: FC<NewsLetterGenericProps> = props=> {
  switch (props.block.type) {
  case 'heading':
    return <NewsLetterHeading key={props.block.id} {...props.block} />;
  case 'paragraph':
    return <NewsLetterParagraph key={props.block.id} {...props.block} />;
  case 'image':
    return <NewsLetterImage key={props.block.id} {...props.block} />;
  case 'link':
    return <NewsLetterLink key={props.block.id} {...props.block} />;
  case 'divider':
    return <NewsLetterDivider key={props.block.id} {...props.block} />;
  case 'bulletList':
    return <NewsLetterBulletList key={props.block.id} {...props.block} />;
  case 'notice':
    return <NewsLetterNotice key={props.block.id} {...props.block} />;
  default:
    return null;
  }
}

