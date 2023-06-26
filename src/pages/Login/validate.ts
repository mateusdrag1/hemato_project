import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('O campo E-mail é obrigatório.'),
  password: z.string().nonempty('O campo Senha é obrigatório.'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
