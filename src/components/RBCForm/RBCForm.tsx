import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Form } from '../Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRBCFormData, createRBCFormSchema } from './validate';

import { IPatient } from '@/core/interfaces/patients.interface';

export const RBCForm: React.FC<{
  patients: IPatient[];
  onSubmit: (data: CreateRBCFormData) => void;
}> = ({ patients, onSubmit }) => {
  const createRBCForm = useForm<CreateRBCFormData>({
    resolver: zodResolver(createRBCFormSchema),
  });

  const { handleSubmit, reset } = createRBCForm;

  return (
    <FormProvider {...createRBCForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <header className='mb-5 flex-col flex'>
              <h2 className='text-lg leading-6 font-medium text-gray-900'>
                Informações sobre Série Vermelha
              </h2>
              <span className='mt-1 text-sm text-gray-500'>
                Aqui você adiciona informações sobre a série vermelha.
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
                <Form.Label htmlFor='erythrocyte'>Eritrócitos (milhões/µL) </Form.Label>
                <Form.Input type='text' name='erythrocyte' />
                <Form.ErrorMessage field='erythrocyte' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='hemoglobin'>Hemoglobina</Form.Label>
                <Form.Input type='text' name='hemoglobin' />
                <Form.ErrorMessage field='hemoglobin' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='hematocrit'>Hematócrito</Form.Label>
                <Form.Input type='text' name='hematocrit' />
                <Form.ErrorMessage field='hematocrit' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='rdw'>RDW</Form.Label>
                <Form.Input type='text' name='rdw' />
                <Form.ErrorMessage field='rdw' />
              </Form.Field>
            </div>
          </div>
        </div>

        <div className='flex justify-end my-5'>
          <Button onClick={() => reset()} variant='secondary' type='button'>
            Limpar campos
          </Button>
          <Button variant='primary' type='submit'>
            Armazenar Série Vermelha
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
