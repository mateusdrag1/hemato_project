import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Form } from '../Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePlateletFormData, createPlateletFormSchema } from './validate';

export const PlateletForm: React.FC<{
  onSubmit: (data: CreatePlateletFormData) => void;
}> = ({ onSubmit }) => {
  const createPlateletForm = useForm<CreatePlateletFormData>({
    resolver: zodResolver(createPlateletFormSchema),
  });

  const { handleSubmit, reset } = createPlateletForm;

  return (
    <FormProvider {...createPlateletForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <header className='mb-5 flex-col flex'>
              <h2 className='text-lg leading-6 font-medium text-gray-900'>
                Análise de Série Plaquetária
              </h2>
              <span className='mt-1 text-sm text-gray-500'>
                Aqui você adiciona o id da lâmina do paciente e após isso o dado de plaquetas.
              </span>
            </header>

            <div className='flex flex-wrap gap-6'>
              <Form.Field>
                <Form.Label htmlFor='smear_id'>Número da Lâmina</Form.Label>
                <Form.Input type='text' name='smear_id' />
                <Form.ErrorMessage field='smear_id' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='platelets'>Plaquetas do paciente</Form.Label>
                <Form.Input type='text' name='platelets' />
                <Form.ErrorMessage field='platelets' />
              </Form.Field>
            </div>
          </div>
        </div>

        <div className='flex justify-end my-5'>
          <Button onClick={() => reset()} variant='secondary' type='button'>
            Limpar campos
          </Button>
          <Button variant='primary' type='submit'>
            Fazer cálculos e gerar relatório
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
