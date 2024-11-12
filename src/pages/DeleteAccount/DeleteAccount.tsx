import { Form } from '@/components/Form';
import { api } from '@/configs';
import { zodResolver } from '@hookform/resolvers/zod';
import { enqueueSnackbar } from 'notistack';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type DeleteAccountFormData, deleteAccountFormSchema } from './validate';

export const DeleteAccount = () => {
  const navigate = useNavigate();

  const deleteAccountForm = useForm<DeleteAccountFormData>({
    resolver: zodResolver(deleteAccountFormSchema),
  });

  const { handleSubmit, reset } = deleteAccountForm;

  const onSubmit = async (data: DeleteAccountFormData) => {
    try {
      await api.post('/delete-account', data);
      enqueueSnackbar('Usuário apagado com sucesso', { variant: 'success' });

      navigate('/');
    } catch (error) {
      enqueueSnackbar('Erro ao apagar usuário', { variant: 'error' });
    }
    reset();
  };

  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-md p-6 rounded-lg w-full max-w-sm text-center'>
        <h1 className='mb-4 font-bold text-2xl text-red-600'>Deletar Conta</h1>
        <p className='mb-6 text-gray-600'>
          Tem certeza de que deseja deletar sua conta? Esta ação é irreversível.
        </p>
        <FormProvider {...deleteAccountForm}>
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
                Apagar Conta
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
