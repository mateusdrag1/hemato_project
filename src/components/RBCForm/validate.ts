import { z } from 'zod';

export const createRBCFormSchema = z.object({
  blade: z.string().nonempty('O campo Lâmina é obrigatório.'),
  erythrocyte: z.coerce.number().nonnegative('O campo Eritrócitos é obrigatório.'),
  hemoglobin: z.coerce.number().nonnegative('O campo Hemoglobina é obrigatório.'),
  hematocrit: z.coerce.number().nonnegative('O campo Hematócrito é obrigatório.'),
  rdw: z.coerce.number().nonnegative('O campo RDW é obrigatório.'),
});

export type CreateRBCFormData = z.infer<typeof createRBCFormSchema>;
