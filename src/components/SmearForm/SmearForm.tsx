import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateSmearFormData, createSmearFormSchema } from './validate';
import { Form } from '../Form';
import { BloodSmear } from '@/pages/WBC';
import { Button } from '../Button';

export const SmearForm: React.FC<{
  setBloodSmear: React.Dispatch<React.SetStateAction<BloodSmear[]>>;
  bloodSmear: BloodSmear[];
}> = ({ setBloodSmear, bloodSmear }) => {
  const createSmearForm = useForm<CreateSmearFormData>({
    resolver: zodResolver(createSmearFormSchema),
  });

  const { handleSubmit, reset } = createSmearForm;

  const createSmear = (data: CreateSmearFormData) => {
    const smearWithDate = {
      ...data,
      created_at: new Date().toLocaleDateString(),
    };

    if (bloodSmear.find((smear) => smear.smear_id === data.smear_id)) {
      alert('Já existe uma lâmina com esse número');
      return;
    }

    if (
      data.segmented_neutrophils +
        data.eosinophils +
        data.rod +
        data.lymphocyte +
        data.monocytes !==
      100
    ) {
      alert('A soma dos valores deve ser igual a 100');
      return;
    }

    setBloodSmear((prev) => [...prev, smearWithDate]);

    localStorage.setItem('bloodSmear', JSON.stringify([...bloodSmear, smearWithDate]));

    reset();
  };

  return (
    <FormProvider {...createSmearForm}>
      <div className='space-y-6'>
        <form onSubmit={handleSubmit(createSmear)}>
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
                <Form.Label htmlFor='smear_id'>Número da Lâmina</Form.Label>
                <Form.Input type='text' name='smear_id' />
                <Form.ErrorMessage field='smear_id' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='segmented_neutrophils'>Neutrófilos Segmentados</Form.Label>
                <Form.Input type='text' name='segmented_neutrophils' />
                <Form.ErrorMessage field='segmented_neutrophils' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='eosinophils'>Eosinófilos</Form.Label>
                <Form.Input type='text' name='eosinophils' />
                <Form.ErrorMessage field='eosinophils' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='rod'>Bastonetes</Form.Label>
                <Form.Input type='text' name='rod' />
                <Form.ErrorMessage field='rod' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='lymphocyte'>Linfócitos</Form.Label>
                <Form.Input type='text' name='lymphocyte' />
                <Form.ErrorMessage field='lymphocyte' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='monocytes'>Monócitos</Form.Label>
                <Form.Input type='text' name='monocytes' />
                <Form.ErrorMessage field='monocytes' />
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
