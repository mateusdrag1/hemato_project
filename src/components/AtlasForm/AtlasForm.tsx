import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Form } from '../Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateCellFormData, createCellFormSchema } from './validate';
import { ICellCategory } from '@/core/interfaces/cells.interface';

export const CellForm: React.FC<{
  onSubmit: (data: CreateCellFormData) => void;
  categories: ICellCategory[];
}> = ({ onSubmit, categories }) => {
  const createCellForm = useForm<CreateCellFormData>({
    resolver: zodResolver(createCellFormSchema),
  });

  const { handleSubmit, reset } = createCellForm;

  return (
    <FormProvider {...createCellForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <header className='mb-5 flex-col flex'>
              <h2 className='text-lg leading-6 font-medium text-gray-900'>Cadastro de células</h2>
              <span className='mt-1 text-sm text-gray-500'>
                Aqui você pode adicionar células ao sistema
              </span>
            </header>

            <div className='flex flex-wrap gap-6'>
              <Form.Field>
                <Form.Label htmlFor='name'>Nome</Form.Label>
                <Form.Input type='text' name='name' />
                <Form.ErrorMessage field='name' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='morphology'>Morfologia</Form.Label>
                <Form.Input type='text' name='morphology' />
                <Form.ErrorMessage field='morphology' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='clinical_relevance'>Relevância Clinica</Form.Label>
                <Form.Input type='text' name='clinical_relevance' />
                <Form.ErrorMessage field='clinical_relevance' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='image'>Link da imagem</Form.Label>
                <Controller
                  name='image'
                  control={createCellForm.control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <input
                      {...field}
                      type='file'
                      value={value?.fileName}
                      onChange={(event) => {
                        onChange(event.target.files?.[0]);
                      }}
                      className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    />
                  )}
                />
                <Form.ErrorMessage field='image' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='category_id'>Categoria</Form.Label>
                <Form.Select name='category_id' defaultValue={''}>
                  <option value='' disabled hidden>
                    Selecione
                  </option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.ErrorMessage field='category_id' />
              </Form.Field>
            </div>
          </div>
        </div>

        <div className='flex justify-end my-5'>
          <Button onClick={() => reset()} variant='secondary' type='button'>
            Limpar campos
          </Button>
          <Button variant='primary' type='submit'>
            Adicionar Célula
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
