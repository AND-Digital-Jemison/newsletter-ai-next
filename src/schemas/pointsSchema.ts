import { z } from 'zod';
import { Tags } from '@/types';

export const pointsSchema = z.object({
  points: z.array(z.object({
    tag: z.nativeEnum(Tags),
    content: z.string()
  }))
});
