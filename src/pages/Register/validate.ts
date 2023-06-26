import { z } from 'zod';

export const registerFormSchema = z.object({
  name: z.string().nonempty('O campo Nome é obrigatório.'),
  email: z.string().email('O campo E-mail é obrigatório.'),
  password: z.string().nonempty('O campo Senha é obrigatório.'),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
