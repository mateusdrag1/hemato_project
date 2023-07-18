import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Form } from '../Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePatientFormData, createPatientFormSchema } from './validate';

export const PatientForm: React.FC<{
  onSubmit: (data: CreatePatientFormData) => void;
}> = ({ onSubmit }) => {
  const createPatientForm = useForm<CreatePatientFormData>({
    resolver: zodResolver(createPatientFormSchema),
  });

  const { handleSubmit, reset } = createPatientForm;

  return (
    <FormProvider {...createPatientForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <header className='mb-5 flex-col flex'>
              <h2 className='text-lg leading-6 font-medium text-gray-900'>Cadastro do Paciente</h2>
              <span className='mt-1 text-sm text-gray-500'>
                Aqui você adiciona sua lâmina de paciente.
              </span>
            </header>

            <div className='flex flex-wrap gap-6'>
              <Form.Field>
                <Form.Label htmlFor='blade'>Número da Lâmina</Form.Label>
                <Form.Input type='number' name='blade' />
                <Form.ErrorMessage field='blade' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='age'>Idade Paciente</Form.Label>
                <Form.Input type='number' name='age' />
                <Form.ErrorMessage field='age' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='genre'>Sexo</Form.Label>
                <Form.Select name='genre' defaultValue={''}>
                  <option value='' disabled hidden>
                    Selecione
                  </option>
                  <option value='M'>Masculino</option>
                  <option value='F'>Feminino</option>
                </Form.Select>
                <Form.ErrorMessage field='genre' />
              </Form.Field>
            </div>
          </div>
        </div>

        <div className='flex justify-end my-5'>
          <Button onClick={() => reset()} variant='secondary' type='button'>
            Limpar campos
          </Button>
          <Button variant='primary' type='submit'>
            Adicionar Paciente
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
