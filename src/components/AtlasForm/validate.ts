import { z } from 'zod';

export const createCellFormSchema = z.object({
  name: z.string().min(3).max(128),
  morphology: z.string().min(3).max(600),
  clinical_relevance: z.string().min(3).max(600),
  category_id: z.coerce.number(),
  image: z.any(),
});

export type CreateCellFormData = z.infer<typeof createCellFormSchema>;
