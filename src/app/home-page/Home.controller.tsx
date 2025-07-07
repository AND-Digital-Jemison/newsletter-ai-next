import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { HomeView } from './Home.view';
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { pointsSchema } from '@/schemas/pointsSchema';
import { Tags } from '@/types';

export const HomeController: FC = () => {
  const [url, setUrl] = useState<string>('');
  const { object, submit, isLoading: loading } = useObject({
    api: '/api/use-object',
    schema: pointsSchema
  });

  const handleChange = (target: ChangeEvent<HTMLInputElement>): void =>
    setUrl(target.currentTarget.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submit(url);
  }

  return (
    <HomeView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      points={object?.points as { content: string, tag: Tags }[] || []}
      url={url}
    />
  )
};
