import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormData, loginFormSchema } from './validate';
import { Form } from '@/components/Form';
import { useAuth } from '@/core/contexts/AuthContext';

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
    <div className='min-h-screen flex items-center justify-center '>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 space-y-6'>
        <div>
          <img className='mx-auto h-12 w-auto' src='/LogoHemato.svg' alt='Hematopedia' />
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
            <div className='flex items-center justify-center'>
              <button
                className='bg-red-500 hover:bg-red-700 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Entrar
              </button>
            </div>
          </form>
        </FormProvider>
        <div className='text-center mt-4'>
          <a className='inline-block text-sm text-gray-600 hover:text-gray-800' href='/register'>
            Registrar-se
          </a>
        </div>
      </div>
    </div>
  );
};
