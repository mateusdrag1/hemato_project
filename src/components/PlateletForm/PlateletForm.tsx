import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Form } from '../Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePlateletFormData, createPlateletFormSchema } from './validate';

import { IPatient } from '@/core/interfaces/patients.interface';

export const PlateletForm: React.FC<{
  patients: IPatient[];
  onSubmit: (data: CreatePlateletFormData) => void;
}> = ({ patients, onSubmit }) => {
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
                <Form.Label htmlFor='blade'>Paciente</Form.Label>
                <Form.Select name='blade'>
                  <option value=''>Selecione um paciente</option>
                  {patients.length > 0 &&
                    patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.blade}
                      </option>
                    ))}
                </Form.Select>
                <Form.ErrorMessage field='blade' />
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
            Armazenar Série Plaquetária
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
