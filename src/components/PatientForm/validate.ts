import { z } from 'zod';

export const createPatientFormSchema = z.object({
  blade: z.string().nonempty('O campo ID da lâmina é obrigatório.'),
  age: z.coerce.number().nonnegative('O campo Idade é obrigatório.'),
  genre: z.enum(['M', 'F'], {
    description: 'O campo Gênero é obrigatório.',
  }),
});

export type CreatePatientFormData = z.infer<typeof createPatientFormSchema>;
