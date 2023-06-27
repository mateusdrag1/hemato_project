import AppContainer from '@/components/Layout/AppContainer';
import { RBCCard } from '@/components/RBCCard';

import { RBCForm } from '@/components/RBCForm';
import { CreateRBCFormData } from '@/components/RBCForm/validate';

import { useGetPatientsQuery, useAddErythrocyteMutation } from '@/features/patients/patientSlice';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';

export const RBC = () => {
  const { data, isFetching } = useGetPatientsQuery();
  const [addErythrocyte, addErythrocyteStatus] = useAddErythrocyteMutation();

  const handleSubmit = async (data: CreateRBCFormData) => {
    await addErythrocyte(data);
  };

  useEffect(() => {
    if (addErythrocyteStatus.isSuccess) {
      enqueueSnackbar('Série Plaquetária adicionada com sucesso', {
        variant: 'success',
      });
    }

    if (addErythrocyteStatus.error) {
      enqueueSnackbar('Erro ao adicionar Série Plaquetária', {
        variant: 'error',
      });
    }
  }, [addErythrocyteStatus]);

  return (
    <AppContainer title='Série Eritrocitária'>
      <RBCForm onSubmit={handleSubmit} patients={data?.patients || []} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <RBCCard data={data?.patients} isFetching={isFetching} />
      </div>
    </AppContainer>
  );
};
