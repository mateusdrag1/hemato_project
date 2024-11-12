import { z } from 'zod';

export const deleteAccountFormSchema = z.object({
  email: z.string().email('O campo E-mail é obrigatório.'),
  password: z.string().nonempty('O campo Senha é obrigatório.'),
});

export type DeleteAccountFormData = z.infer<typeof deleteAccountFormSchema>;
