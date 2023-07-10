import { z } from 'zod';

export const createSmearFormSchema = z.object({
  blade: z.string().nonempty('O campo ID da lâmina é obrigatório.'),
  leukocyte: z.coerce.number().nonnegative('O campo Leucócitos é obrigatório.'),
  neutrophils: z.coerce
    .number()
    .nonnegative('O campo Segmentados é obrigatório.')
    .max(100, 'O campo Segmentados deve ser menor que 100.'),
  eosinophils: z.coerce
    .number()
    .nonnegative('O campo Eosinófilos é obrigatório.')
    .max(100, 'O campo Eosinófilos deve ser menor que 100.'),
  bandNeutrophils: z.coerce
    .number()
    .nonnegative('O campo Bastonetes é obrigatório.')
    .max(100, 'O campo Bastonetes deve ser menor que 100.'),
  lymphocytes: z.coerce
    .number()
    .nonnegative('O campo Linfócitos é obrigatório.')
    .max(100, 'O campo Linfócitos deve ser menor que 100.'),
  monocytes: z.coerce
    .number()
    .nonnegative('O campo Monócitos é obrigatório.')
    .max(100, 'O campo Monócitos deve ser menor que 100.'),
  basophils: z.coerce
    .number()
    .nonnegative('O campo Basófilos é obrigatório.')
    .max(100, 'O campo Basófilos deve ser menor que 100.'),
});

export type CreateSmearFormData = z.infer<typeof createSmearFormSchema>;
