import { Form } from '@/components/Form';
import { useAuth } from '@/core/contexts/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { type LoginFormData, loginFormSchema } from './validate';

export const Login = () => {
  const { login } = useAuth();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const { handleSubmit, reset } = loginForm;

  const onSubmit = async (data: LoginFormData) => {
    login(data);
    reset();
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='space-y-6 bg-white shadow-md mb-4 px-8 pt-6 pb-8 rounded w-96'>
        <div>
          <img className='mx-auto w-auto h-12' src='/LogoHemato.svg' alt='Hematopedia' />
        </div>
        <FormProvider {...loginForm}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-center items-center space-y-5'
            noValidate
          >
            <Form.Field>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Input type='email' name='email' />
              <Form.ErrorMessage field='email' />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='password'>Senha</Form.Label>
              <Form.Input type='password' name='password' />
              <Form.ErrorMessage field='password' />
            </Form.Field>
            <div className='flex justify-center items-center'>
              <button
                className='bg-red-500 hover:bg-red-700 focus:shadow-outline px-4 py-2 rounded font-bold text-white duration-200 focus:outline-none'
                type='submit'
              >
                Entrar
              </button>
            </div>
          </form>
        </FormProvider>
        <div className='mt-4 text-center'>
          <a className='inline-block text-gray-600 text-sm hover:text-gray-800' href='/register'>
            Registrar-se
          </a>
        </div>
      </div>
    </div>
  );
};
