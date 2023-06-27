import { PlateletForm } from '@/components/PlateletForm';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';

import AppContainer from '@/components/Layout/AppContainer';

import { useAddPlateletMutation, useGetPatientsQuery } from '@/features/patients/patientSlice';
import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { PlateletCard } from '@/components/PlateletCard';

export interface PlateletsPatients extends CreatePlateletFormData {
  createdAt: string;
}

export const Platelet: React.FC = () => {
  const { data, isFetching } = useGetPatientsQuery();
  const [addPlatelet, addPlateletStatus] = useAddPlateletMutation();

  const handleSubmit = async (data: CreatePlateletFormData) => {
    await addPlatelet(data);
  };

  useEffect(() => {
    if (addPlateletStatus.isSuccess) {
      enqueueSnackbar('Série Plaquetária adicionada com sucesso', {
        variant: 'success',
      });
    }

    if (addPlateletStatus.error) {
      enqueueSnackbar('Erro ao adicionar Série Plaquetária', {
        variant: 'error',
      });
    }
  }, [addPlateletStatus]);

  return (
    <AppContainer title='Série Plaquetária'>
      <PlateletForm onSubmit={handleSubmit} patients={data?.patients || []} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <PlateletCard data={data?.patients} isFetching={isFetching} />
      </div>
    </AppContainer>
  );
};
