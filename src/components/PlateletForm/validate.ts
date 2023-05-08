import { z } from 'zod';

export const createPlateletFormSchema = z.object({
  smear_id: z.string().nonempty('O campo ID da lâmina é obrigatório.'),
  platelets: z.coerce.number().nonnegative('O campo Plaquetas é obrigatório.'),
});

export type CreatePlateletFormData = z.infer<typeof createPlateletFormSchema>;
