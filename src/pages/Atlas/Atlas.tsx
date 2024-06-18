import { CellForm } from '@/components/AtlasForm';
import { CreateCellFormData } from '@/components/AtlasForm/validate';
import { CellCard } from '@/components/CellCard';
import AppContainer from '@/components/Layout/AppContainer';
import { useAuth } from '@/core/contexts';
import { useGetCategoriesQuery } from '@/features/categories/categorySlice';

import { useCreateCellMutation, useGetCellsQuery } from '@/features/cells/cellSlice';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const Atlas: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isFetching } = useGetCellsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const [createCell, createCellStatus] = useCreateCellMutation();

  const { user } = useAuth();

  const handleSubmit = async (data: CreateCellFormData) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.image);
    reader.onloadend = async () => {
      const base64data = reader.result;

      data = {
        ...data,
        image: base64data as string,
      };

      await createCell(data);
    };
  };

  useEffect(() => {
    if (createCellStatus.isSuccess) {
      enqueueSnackbar('Célula criada com sucesso', {
        variant: 'success',
      });
    }

    if (createCellStatus.error) {
      enqueueSnackbar('Erro ao criar célula', {
        variant: 'error',
      });
    }
  }, [createCellStatus, enqueueSnackbar]);

  return (
    <AppContainer title='Atlas'>
      {user!.user.role === 'ADMIN' && (
        <CellForm onSubmit={handleSubmit} categories={categoriesData?.categories || []} />
      )}

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <CellCard data={data?.cells} isFetching={isFetching} />
      </div>
    </AppContainer>
  );
};

export { Atlas };
