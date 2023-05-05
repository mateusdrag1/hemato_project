import { z } from 'zod';

export const createRBCFormSchema = z.object({
  smear_id: z.string().nonempty('O campo ID da lâmina é obrigatório.'),
  age: z.coerce.number().nonnegative('O campo Idade é obrigatório.'),
  gender: z.enum(['M', 'F'], {
    description: 'O campo Gênero é obrigatório.',
  }),

  erythrocytes: z.coerce.number().nonnegative('O campo Eritrócitos é obrigatório.'),
  hemoglobin: z.coerce.number().nonnegative('O campo Hemoglobina é obrigatório.'),
  hematocrit: z.coerce.number().nonnegative('O campo Hematócrito é obrigatório.'),
  rdw: z.coerce.number().nonnegative('O campo RDW é obrigatório.'),
});

export type CreateRBCFormData = z.infer<typeof createRBCFormSchema>;
