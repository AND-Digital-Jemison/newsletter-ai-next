import { NewsletterBlock, NewsletterContent } from '@/types';

export type DraggableListProps = {
    items: NewsletterBlock[];
    handleBlockMove: (blocks: NewsletterContent) => void;
}

export type DraggableElementProps = {
    item: NewsletterBlock;
    index: number;
}
