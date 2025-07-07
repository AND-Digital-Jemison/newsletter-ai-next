import { ChangeEvent, FormEvent } from 'react';
import { Tags } from '@/types';

export type HomeViewProps = {
    handleChange: (target: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    loading: boolean,
    points: {
        content: string;
        tag: Tags;
    }[],
    url: string
}
