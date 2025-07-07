import { openai } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { NextRequest } from 'next/server'
import { pointsSchema } from '@/schemas/pointsSchema';

export const maxDuration = 30;

export const POST = async (req: NextRequest) => {
  const context = await req.json();

  const scrapeResponse = await fetch(
    `http://localhost:5000/api/v1/process?url=${context}`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const result = streamObject({
    model: openai('o4-mini'),
    schema: pointsSchema,
    prompt: `
        create a list of bullet points summarising the following text:
        
        ${scrapeResponse?.text}
        
        the result should be a high level overview of key information only.
        to qualify for a valid point there should be a topic or subject and some information to go with it. otherwise ignore it
        try to keep the points relatively short around 20 words maximum.
        do not include more than one of same topic.
        
        also assign a tag that fits the schema, you can use the same tag on multiple entries
        `
  });

  return result.toTextStreamResponse();
};
