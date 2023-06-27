import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateSmearFormData, createSmearFormSchema } from './validate';
import { Form } from '../Form';

import { Button } from '../Button';

import { IPatient } from '@/core/interfaces/patients.interface';

export const SmearForm: React.FC<{
  patients: IPatient[];
  onSubmit: (data: CreateSmearFormData) => void;
}> = ({ patients, onSubmit }) => {
  const createSmearForm = useForm<CreateSmearFormData>({
    resolver: zodResolver(createSmearFormSchema),
  });

  const { handleSubmit, reset } = createSmearForm;

  return (
    <FormProvider {...createSmearForm}>
      <div className='space-y-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <header className='mb-5 flex-col flex'>
              <h2 className='text-lg leading-6 font-medium text-gray-900'>Contagem diferencial</h2>
              <span className='mt-1 text-sm text-gray-500'>
                Aqui você adiciona sua lâmina de paciente, com os dados da lâmina e imagens.
              </span>
              <span className='text-red-400 text-xs'>
                Todos os campos estão marcados como no mínimo 0 e no máximo 100. A soma dos valores
                deve ser igual a 100.
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
                <Form.Label htmlFor='leukocyte'>Leucócitos Total</Form.Label>
                <Form.Input type='text' name='leukocyte' />
                <Form.ErrorMessage field='leukocyte' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='neutrophil'>Neutrófilos Segmentados</Form.Label>
                <Form.Input type='text' name='neutrophil' />
                <Form.ErrorMessage field='neutrophil' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='eosinophil'>Eosinófilos</Form.Label>
                <Form.Input type='text' name='eosinophil' />
                <Form.ErrorMessage field='eosinophil' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='basophil'>Basófilos</Form.Label>
                <Form.Input type='text' name='basophil' />
                <Form.ErrorMessage field='basophil' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='bandNeutrophils'>Bastonetes</Form.Label>
                <Form.Input type='text' name='bandNeutrophils' />
                <Form.ErrorMessage field='bandNeutrophils' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='lymphocyte'>Linfócitos</Form.Label>
                <Form.Input type='text' name='lymphocyte' />
                <Form.ErrorMessage field='lymphocyte' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='monocyte'>Monócitos</Form.Label>
                <Form.Input type='text' name='monocyte' />
                <Form.ErrorMessage field='monocyte' />
              </Form.Field>
            </div>
          </div>
          <div className='flex justify-end mt-5'>
            <Button onClick={() => reset()} variant='secondary' type='button'>
              Limpar campos
            </Button>
            <Button variant='primary' type='submit'>
              Armazenar lâmina
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
