import { PlateletForm } from '@/components/PlateletForm';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';
import { ResultPlatelet } from '@/components/ResultPlatelet';

import AppContainer from '@/components/Layout/AppContainer';

import { useAddPlateletMutation, useGetPatientsQuery } from '@/features/patients/patientSlice';
import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

export interface PlateletsPatients extends CreatePlateletFormData {
  createdAt: string;
}

export const Platelet: React.FC = () => {
  const { data } = useGetPatientsQuery();
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
        {data?.patients?.length > 0 &&
          data?.patients.map((patient) => <ResultPlatelet key={patient.blade} pacient={patient} />)}
      </div>
    </AppContainer>
  );
};
